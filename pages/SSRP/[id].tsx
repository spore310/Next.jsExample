import { GetStaticPaths, GetStaticProps } from "next";
import * as React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { ParsedUrlQuery } from "querystring";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import { client } from "../../apollo-client";
import { gql } from "@apollo/client";
import styles from "./SSRP.module.scss";

interface IParams extends ParsedUrlQuery {
  id: string;
}
interface episode {
  episode: string;
  name: string;
  id: string;
}
const RickAndMorty = ({ character }: any) => {
  const router = useRouter();
  if (router.isFallback)
    return (
      <Typography variant="h1" component="div" color="white">
        Loading...
      </Typography>
    );

  const episodeList = character.episode.map((ep: episode) => (
    <Typography
      key={ep.id}
      variant="body1"
      color="white"
      component="div"
      className={styles.episodeItem}
    >
      {ep.episode}: {ep.name}
    </Typography>
  ));
  return (
    <div className={styles.wiki}>
      <Typography
        variant="h2"
        color="white"
        component="div"
        className={styles.name}
      >
        Name: {character?.name}
      </Typography>
      <div className={styles.profile}>
        <Image
          src={character.image}
          width={200}
          height={200}
          alt="Rick And Morty Avatar Image"
        />
      </div>

      <div className={styles.info}>
        {" "}
        <div className={styles.general}>
          {" "}
          <Typography variant="body1" color="white" component="div">
            ID: <span>{character?.id}</span>
          </Typography>
          <Typography variant="body1" color="white" component="div">
            Gender: {character?.gender}
          </Typography>
          <Typography variant="body1" color="white" component="div">
            Spieces: {character?.species}
          </Typography>
          <Typography variant="body1" color="white" component="div">
            Status: {character?.status}
          </Typography>
          <Typography variant="body1" color="white" component="div">
            Type: {character.type === "" ? "N/A" : character?.type}
          </Typography>
          <Typography variant="body1" color="white" component="div">
            Location: {character?.location.name}
          </Typography>
          <Typography variant="body1" color="white" component="div">
            Origin: {character?.origin.name}
          </Typography>
        </div>{" "}
        <div className={styles.episode}>
          <Typography variant="body1" color="white" component="div">
            Episodes:
          </Typography>
          <div className={styles.episodeList}>{episodeList}</div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const {
    data: { results },
  } = await axios.get("https://rickandmortyapi.com/api/character");
  const paths = results.map((ele: any) => {
    return { params: { id: ele.id.toString() } };
  });

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params as IParams;
  const { data } = await client.query({
    query: gql`
      query getCharacterInfo($char: ID!) {
        character(id: $char) {
          id
          name
          gender
          status
          species
          type
          image
          location {
            name
            dimension
          }
          origin {
            name
            dimension
            id
          }
          episode {
            name
            episode
            id
          }
        }
      }
    `,
    variables: { char: id },
  });
  if (data?.character) {
    return {
      props: { character: data.character },
      revalidate: 10,
    };
  } else {
    return {
      notFound: true,
    };
  }
};
export default RickAndMorty;
