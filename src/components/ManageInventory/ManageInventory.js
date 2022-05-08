import React, { useState } from 'react';
import usePartItems from '../hooks/usePartItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [carParts, setCarParts] = usePartItems();
    
    

    const handleDelete = (id) =>{
        const proceed = window.confirm('Are you sure about that?');
        if(proceed){
            const url = `http://localhost:5000/inventory/${id}`;

            fetch(url, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                const remainingItem = carParts.filter(carPart => carPart._id !== id);
                setCarParts(remainingItem);
            })
        }
    }
 
    // const incrQty = () =>{
    //   setPart(prevCount => prevCount+1);
    // }
    // const decrQty = (id) =>{
    //   if(part >1){
    //     setPart(prevCount => prevCount-1);
    //   }
      
    // }
   

    return (
        <div>
            <h2 className='text-center mt-4 mb-4'>Manage Inventory</h2>
            {
                carParts.map(carPart => <div
                key={carPart._id}
                >
       <div className='mb-3 container'>
       <table>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Price</th>
      <th scope="col">Quantity</th>
      <th scope="col">Supplier</th>
      <th scope="col">image</th>
     
    </tr>
   
  </thead>
  <tbody>
    <tr>
      <td data-label="name">{carPart.name}</td>
      <td data-label="price">{carPart.price}</td>
      <td data-label="quantity">{carPart.quantity}</td>
      <td data-label="supplier">{carPart.supplier}</td>
      <td data-label="supplier"> <img className='w-50' src={carPart.img} alt="" /> </td>
      <td>
        {/* <button onClick={incrQty}>+</button>
       {part.quantity}
        <button onClick={decrQty}>-</button> */}
      </td>
    </tr>
  </tbody>
  <div>
      <button onClick={()=> handleDelete(carPart._id)} className='btn btn-danger'>Delete Item</button>
    </div>
    </table>
       </div>
  </div>)
     }
        </div>
    );
};

export default ManageInventory;