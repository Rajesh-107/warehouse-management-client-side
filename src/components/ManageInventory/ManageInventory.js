import React from 'react';
import usePartItems from '../hooks/usePartItems';
import './ManageInventory.css';

const ManageInventory = () => {
    const [carParts] = usePartItems();
    return (
        <div>
            <h2>Manage Inventory</h2>
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
      <button className='btn btn-danger'>Delete Item</button>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td data-label="name">{carPart.name}</td>
      <td data-label="price">{carPart.price}</td>
      <td data-label="quantity">{carPart.quantity}</td>
      <td data-label="supplier">{carPart.supplier}</td>

      <button className='btn btn-secondary'>Update Stock</button>
    </tr>
  </tbody>
    </table>
       </div>
  </div>)
     }
        </div>
    );
};

export default ManageInventory;