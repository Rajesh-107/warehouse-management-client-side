import React from 'react';
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
      <button onClick={()=> handleDelete(carPart._id)} className='btn btn-danger'>Delete Item</button>
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