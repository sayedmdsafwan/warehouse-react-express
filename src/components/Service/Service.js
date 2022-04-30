import React from "react";
import { Button, Card } from "react-bootstrap";

const Service = ({ service }) => {
    const { name, img, description, price, quantity, supplier } = service;
    return (
        <div className="col-md-4">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h2 className="text-danger">{name}</h2>
                    </Card.Title>
                    <Card.Text>{description}</Card.Text>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Price: ${price}</p>
                        </div>
                        <div className="col-md-6">
                            <p>Quantity: {quantity} tons</p>
                        </div>
                    </div>

                    <p className="lead">Supplier: {supplier}</p>
                    <Button variant="danger" className="w-100">
                        Manage This Stock
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
