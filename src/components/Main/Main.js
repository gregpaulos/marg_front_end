import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';
import MargMap from './MargMap/MargMap';
import classes from './Main.css';

const Main = (props) => {
    return (
        <main className={classes.Main}>
            <MargMap location={props.userLocation} 
                    data={props.establishments}
                    showMap={props.showMap} />
            <Button trigger={props.findRandomButton}/>
            <ListArea establishments={props.establishments} toggleModal={props.toggleModal} />
        </main>
    )
}

export default Main;