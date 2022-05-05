import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import useItemDetail from '../hooks/useItemDetail';
import './ItemDetail.css';

const ItemDetail = () => {
 
    const {id} = useParams();
    const [stockItem] = useItemDetail(id);

    return (
        <div>
            <h2>Stock Item: {stockItem.name} </h2>
            <table className='container'>
    <tr>
      <th>id</th>
      <th>name</th>
      <th>image</th>
      <th>price</th>
      <th>quantity</th>
      <th>supplier name</th>
      
    </tr>
    <tr>
    <td>{stockItem._id}</td>
      <td>{stockItem.name}</td>
      <td>{stockItem.img}</td>
      <td>{stockItem.price}</td>
      <td>{stockItem.quantity}</td>
      <td>{stockItem.supplier}</td>
    </tr>
   
  </table>
            <div className='text-center'>
            <Link to={`/delivered/${id}`}>
                <button className='btn btn-secondary mt-5 mb-5'>Delivered Item</button>
            </Link>
            </div>
        </div>
    );
};

export default ItemDetail;