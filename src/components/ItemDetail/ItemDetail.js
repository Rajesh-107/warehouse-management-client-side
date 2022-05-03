import React, { useEffect, useState } from 'react';
import {Link, useParams} from 'react-router-dom';
import './ItemDetail.css';

const ItemDetail = () => {
    const {id} = useParams();
    const [stockItem, setStockItem] = useState({});

    useEffect( () =>{
        const url = `http://localhost:5000/inventory/${id}`;

        fetch(url)
        .then(res => res.json())
        .then(data => setStockItem(data))

    },[])

    return (
        <div>
            <h2>Stock Item: {stockItem.name} </h2>
            <table>
    <tr>
      
      <th>name</th>
      <th>image</th>
      <th>price</th>
      <th>quantity</th>
      <th>supplier name</th>
      
    </tr>
    <tr>
      <td>{stockItem.name}</td>
      <td>{stockItem.img}</td>
      <td>{stockItem.price}</td>
      <td>{stockItem.quantity}</td>
      <td>{stockItem.supplier}</td>
    </tr>
   
  </table>
            <div className='text-center'>
            <Link to='/delivered'>
                <button className='btn btn-secondary'>Delivered Item</button>
            </Link>
            </div>
        </div>
    );
};

export default ItemDetail;