import { useState, useEffect } from 'react';

const useItemDetail = id => {
    const [stockItem, setStockItem] = useState({});

    useEffect(() => {
        const url = `https://morning-hamlet-62684.herokuapp.com/inventory/${id}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setStockItem(data))

    }, [id]);
    return [stockItem]
}
export default useItemDetail;