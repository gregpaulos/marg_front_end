import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';
import MargMap from './MargMap/MargMap';
import SortButton from './SortButton/SortButton'

const Main = (props) => {
    return (
        <main>
            <Button trigger={props.findRandomButton}/>
            <MargMap location={props.userLocation} 
                    data={props.establishments}
                    showMap={props.showMap} />
            <ListArea establishments={props.establishments} toggleModal={props.toggleModal} />
            {props.establishments.length > 0 ? <SortButton toggleSort={props.toggleSort}
                    sortedByDistance={props.sortedByDistance}/> : ""}
        </main>
    )
}

export default Main;