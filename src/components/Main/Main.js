import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';
import MargMap from './MargMap/MargMap';
import classes from './Main.css';

const Main = (props) => {
    return (
        <main>
            <MargMap location={props.userLocation} 
                    data={props.establishments}
                    showMap={props.showMap} />
            <div className={classes.Absolute}>
                <Button trigger={props.findRandomButton} className={classes.Center}/>
                <ListArea establishments={props.establishments} toggleModal={props.toggleModal} className={classes.Center} />
            </div>
        </main>
    )
}

export default Main;