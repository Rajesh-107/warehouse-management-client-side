import React from 'react';
import {useParams} from 'react-router-dom';

const ItemDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is item Detail part: {id} </h2>
        </div>
    );
};

export default ItemDetail;