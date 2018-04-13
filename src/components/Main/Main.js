import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';
import MargMap from './MargMap/MargMap';

const Main = (props) => {
    return (
        <main>
            <Button trigger={props.findRandomButton}/>
            <MargMap location={props.userLocation} 
                    data={props.establishments}
                    showMap={props.showMap} />
            <ListArea establishments={props.establishments} />
        </main>
    )
}

export default Main;