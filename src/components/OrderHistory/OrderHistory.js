import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const OrderHistory = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
 
      useEffect( () =>{
        const getItems = async() =>{
        const email = user.email;
         const url = `http://localhost:5000/orders?email=${email}`;
         const {data} = await axios.get(url);
         setMyItems(data);
        }
        getItems();
    },[user])

    return (
        <div className='mb-5 mt-3'>
            <h2 className='text-center '>My all Items  </h2>
        {
            myItems.map(myItem => <div  key={myItem._id}>

            <table className='container mb-2'>
                      <tr>
                       <th>name</th>
                       <th>Phone</th>
                       <th>Email</th>
                       <th>Address</th>
                       <th>Supplier</th>
                      </tr>
                    <tr>
                        <td>{myItem.item}</td>
                        <td>{myItem.phone}</td>
                        <td>{myItem.email}</td>
                        <td>{myItem.address}</td>
                        <td>{myItem.supplier}</td>
                    </tr>
   
             </table> 
            </div>)
        }
        </div>
    );
};

export default OrderHistory;










