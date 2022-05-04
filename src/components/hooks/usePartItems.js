import {useEffect,useState} from 'react';

const usePartItems = () =>{
    const [carParts, setCarParts] = useState([]);

    useEffect( ()=> {
        fetch('http://localhost:5000/inventory')
        .then(res => res.json())
        .then(data => setCarParts(data));
    },[]);
    return [carParts, setCarParts];
}


export default usePartItems;