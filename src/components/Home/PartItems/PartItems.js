import React, {useState, useEffect} from 'react';
import PartItem from '../PartItem/PartItem';
import './PartItems.css';

const PartItems = () => {

    const [carParts, setCarParts] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setCarParts(data.slice(0,6)))
    },[])

    return (
        <div id='carparts' className='container mt-4'>
            <h2 className='text-center'>Cart part items Available </h2>
           <div className='items-card mb-3'>
           {
                carParts.map(carPart => <PartItem 
                    key={carPart._id}
                    carPart={carPart}
                >
                </PartItem>)
            }
           </div>
        </div>
    );
};

export default PartItems;