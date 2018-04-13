import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';

const Main = (props) => {
    return (
        <main>
            <Button trigger={props.findRandomButton}/>
            <ListArea establishments={props.establishments} />
        </main>
    )
}

export default Main;