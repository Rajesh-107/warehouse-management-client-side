import React from 'react';
import { useForm } from "react-hook-form";

const StockItem = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        const url = `https://morning-hamlet-62684.herokuapp.com/inventory`;
        fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
            })
    };


    return ( <
        div className = 'w-50 mx-auto' >
        <
        h2 className = 'text-center text-secondary mb-3' > Add Inventories < /h2> <
        form className = 'd-flex flex-column'
        onSubmit = { handleSubmit(onSubmit) } >
        <
        input className = 'mb-3'
        placeholder = 'Name' {...register("name", { required: true, maxLength: 20 }) }
        /> <
        textarea className = 'mb-3'
        placeholder = 'Description' {...register("description") }
        /> <
        input className = 'mb-3'
        placeholder = 'Price'
        type = "number" {...register("price") }
        /> <
        input className = 'mb-3'
        placeholder = 'Quantity'
        type = "number" {...register("quantity") }
        /> <
        input className = 'mb-3'
        placeholder = 'Photo URL'
        type = "text" {...register("img") }
        /> <
        input className = 'mb-3'
        placeholder = 'Supplier'
        type = "text" {...register("supplier") }
        /> <
        input className = 'mb-3 btn btn-secondary'
        type = "submit"
        value = "Stock Item" / >
        <
        /form> <
        /div>
    );
};

export default StockItem;