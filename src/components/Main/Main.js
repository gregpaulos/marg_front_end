import React from 'react';
import Button from './Button/Button';
import ListArea from './ListArea/ListArea';

const Main = (props) => {
    return (
        <main>
            <Button />
            <ListArea establishments={props.establishments} />
        </main>
    )
}

export default Main;