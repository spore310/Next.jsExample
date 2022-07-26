import { useQuery, gql } from "@apollo/client";
import { RestaurantMenuRounded } from "@mui/icons-material";
import React, { FC, useState } from 'react';
import styles from './CharacterList.module.scss';
const Query = gql`
    query GetCharacterList($pageNum: Int){
        characters(page:$pageNum){
            info{
                next,
                prev,
                pages
            }
            results{
                id,
                name,
                gender,
                status,
                species,
                type,
                image,
                location{
                    name,
                    dimension
                    },
                origin{
                    name,
                    dimension
                    },
                

            }
        }  
    }
`;

export const CharacterList: FC = () => {
    const [page, setPageNum] = useState(1);
    const [numOfPages, setNumOfPages] = useState(1);
    const { data, loading, error } = useQuery(Query, {
        variables: { pageNum: page }
    });
    if (error) {
        {/* handles in case of error */}
        return (<div className={styles.buttonGroup}>{'error'}</div>)
    }
    if (loading) {
        {/* handles loading state */}
        return (<div className={styles.buttonGroup}>
            <div> 
                <button disabled={true}>{'<'}</button>
                {`${page}/${numOfPages}`}
                <button disabled={true}>{'>'}</button>
            </div>
            <p>loading...</p>
        </div>)
    }

    if (data) {
        {/* handles when data is sent back */}
        const { characters: { info, results } } = data;
        if (numOfPages !== info.pages) { setNumOfPages(prev => info.pages); }
        const prevPage = info.prev ? info.prev : null;
        const nextPage = info.next ? info.next : null;

        const handleNextPage = () => {
            if (info.next === null) {
                return
            } else {
                setPageNum(prev => prev + 1);
            }
        }
        const handlePrevPage = () => {
            if (info.prev === null) {
                return
            } else {
                setPageNum(prev => prev - 1)
            }
        }


        console.log(info, results);

        return (<div className={styles.buttonGroup}>
            {prevPage ? <button onClick={handlePrevPage}>{'<'}</button> : <button disabled={true}>{'<'}</button>}
            {`${page}/${info.pages}`}
            {nextPage ? <button onClick={handleNextPage}>{'>'}</button> : <button disabled={true}>{'>'}</button>}
        </div>)
    }
    return (<></>)
}