import ClientSide from '../../client-sideOnly';
import TestSide from './CharacterList';

export default function Test(){

    return(
        <ClientSide>
            <TestSide/>
        </ClientSide>
    )
}