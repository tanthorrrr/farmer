import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';

const ProductCard = (props) => {
    let { imgSrc, price, title } = props.data;
    return (
        <Card className="p-0 overflow-hidden h-100 shadow ">
            <div className="overflow-hidden rounded p-0 bg-light">
                <Card.Img cariant="top" src={imgSrc} />
            </div>
            <Card.Body className="text-center">
                <Card.Title className="display-6">{title}</Card.Title>
                <Card.Title className="display-6">{price}</Card.Title>
            </Card.Body>
            <Button className="w-100 rounded-0 display-4 " variant="success">
                Xem chi tiết
            </Button>
        </Card>
    );
};
export default ProductCard;
