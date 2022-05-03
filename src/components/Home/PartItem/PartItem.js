import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './PartItem.css';

const PartItem = ({carPart}) => {
    const {_id,name, img, description, price, quantity, supplier} = carPart;
    const navigate = useNavigate();

    const itemDetail = id =>{
      navigate(`/inventory/${id}`);
    }

    return (
     <div className='items col-md-12 col-sm-3'>
         <CardGroup>
  <Card>
    <Card.Img variant="top" className='w-100' src={img} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>
        <p><small>Price: {price}</small></p>
      </Card.Text>
      <Card.Text>
        <p><small>Quantity: {quantity}</small></p>
      </Card.Text>
      <Card.Text>
        <p><small>Supplier: {supplier}</small></p>
      </Card.Text>
    </Card.Body>
    <Button onClick={()=> itemDetail(_id)} className='btn btn-danger'>Stock Item</Button>
  </Card>
  
</CardGroup>
     </div>
    );
};

export default PartItem;