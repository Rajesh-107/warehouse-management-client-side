import { useEffect, useState } from 'react';

const usePartItems = () => {
    const [carParts, setCarParts] = useState([]);

    useEffect(() => {
        fetch('https://morning-hamlet-62684.herokuapp.com/inventory')
            .then(res => res.json())
            .then(data => setCarParts(data));
    }, []);
    return [carParts, setCarParts];
}


export default usePartItems;