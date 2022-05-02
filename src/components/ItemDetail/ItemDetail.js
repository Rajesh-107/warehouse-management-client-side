import React from 'react';
import {Link, useParams} from 'react-router-dom';

const ItemDetail = () => {
    const {id} = useParams();
    return (
        <div>
            <h2>This is item Detail part: {id} </h2>
            <div className='text-center'>
            <Link to='/delivered'>
                <button className='btn btn-secondary'>Delivered Item</button>
            </Link>
            </div>
        </div>
    );
};

export default ItemDetail;