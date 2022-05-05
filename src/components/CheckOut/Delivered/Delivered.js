import React from 'react';
import { useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-bootstrap';

const Delivered = () => {
    const {id} = useParams();
    const [stockItem] = useItemDetail(id);
    const [user] = useAuthState(auth);
    
    const handlePlaceOrder = e =>{
        e.preventDefault();
        const order ={
            email: user.email,
            item: stockItem.name,
            id:id,
            supplier: stockItem.supplier,
            address: e.target.address.value,
            quantity:e.target.quantity.value,
            phone:e.target.phone.value,
            
        }
        axios.post('http://localhost:5000/order', order)
        .then(response => {
            console.log(response);
            const {data} = response;
            if(data.insertedId){
                toast('See you soon!!');
                e.target.reset();
            }
        }) 
    }

    return (
        <div className='w-50 mx-auto'>
            
            <h2>Deliverd item :{stockItem.name} </h2>
            <form onSubmit={handlePlaceOrder}>
                <input className='w-100 mb-2' type="text" value={user?.displayName}  disabled  name="name" placeholder='name' required />
                <br />
                <input className='w-100 mb-2'  type="email" value={user?.email}  disabled  name="email" placeholder='email' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="name" value={stockItem?.name} placeholder='orderName' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="supplier" value={stockItem?.supplier} placeholder='supplier' readOnly required />
                <br />
                <input className='w-100 mb-2'  type="text" name="address" placeholder='address' autoComplete='off' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="quantity" placeholder='quantity' required />
                <br />
                <input className='w-100 mb-2'  type="text" name="phone" placeholder='phone' autoComplete='off' required />
                <br />
                <input className='btn btn-secondary' type="submit" value="Submit" />
                <ToastContainer></ToastContainer>
            </form>
        </div>
    );
};

export default Delivered;