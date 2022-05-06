import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const OrderHistory = () => {
    const [user] = useAuthState(auth);
    const [myItems, setMyItems] = useState([]);
 
    
    useEffect( () =>{

        const getItems = async() =>{
         const url = `http://localhost:5000/orders`;
         const {data} = await axios.get(url);
         setMyItems(data);
        }
        getItems();
        

    },[user])

    return (
        <div className='mb-5 mt-3'>
            <h2>Orders:{myItems.length}  </h2>
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





















// import { signOut } from 'firebase/auth';
// import React, { useEffect, useState } from 'react';
// import { useAuthState } from 'react-firebase-hooks/auth';
// import { useNavigate } from 'react-router-dom';
// import auth from '../../firebase.init';
// import axiosPrivate from '../api/axiosPrivate';

// const OrderHistory = () => {
//     const [user] = useAuthState(auth);
//     const [myItems, setMyItems] = useState([]);
//     const navigate = useNavigate();
//     useEffect( ()=> {

//         const myOrders = async() => {
//             const email = user?.email;
//             const url = `http://localhost:5000/order?email=${email}`;
//              try{
//                 const {data} = await axiosPrivate.get(url);
//                 setMyItems(data);
//              }
//              catch(error){
//                 console.log(error.message);
//                 if(error.response.status === 401 || error.response.status === 403){
//                     signOut(auth);
//                     navigate('/login');
//                 }
//              }
//         }
//         myOrders();
        
//     },[user]);


//     return (
//         <div>
//             <h2>My Items:  </h2>

//         </div>
//     );
// };

// export default OrderHistory;










