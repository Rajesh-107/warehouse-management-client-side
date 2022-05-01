import React, {useState, useEffect} from 'react';
import PartItem from '../PartItem/PartItem';
import './PartItems.css';

const PartItems = () => {

    const [carParts, setCarParts] = useState([]);

    useEffect( ()=> {
        fetch('items.json')
        .then(res => res.json())
        .then(data => setCarParts(data))
    },[])

    return (
        <div className='container'>
            <h2 className='text-primary align-items-center'>Cart part items Available </h2>
           <div className='items-card mb-3'>
           {
                carParts.map(carPart => <PartItem 
                    key={carPart.id}
                    carPart={carPart}
                >
                </PartItem>)
            }
           </div>
        </div>
    );
};

export default PartItems;