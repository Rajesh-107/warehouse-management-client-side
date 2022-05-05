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
        <div>
            <h2>My Items: {myItems.length} </h2>
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










