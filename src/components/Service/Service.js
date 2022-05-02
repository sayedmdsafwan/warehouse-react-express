import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
    const { _id, name, img, description, price, quantity, supplier } = service;

    const navigate = useNavigate();
    const navigateInventoryDetail = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <div className="col-md-4">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>
                        <h2 className="text-danger">{name}</h2>
                    </Card.Title>
                    <Card.Text>{description.slice(0, 50)}</Card.Text>
                    <div className="row">
                        <div className="col-md-6">
                            <p>Price: ${price}</p>
                        </div>
                        <div className="col-md-6">
                            <p>Quantity: {quantity} tons</p>
                        </div>
                    </div>

                    <p className="lead">Supplier: {supplier}</p>
                    <Button
                        onClick={() => navigateInventoryDetail(_id)}
                        variant="danger"
                        className="w-100 btn-sm"
                    >
                        Manage Stock
                    </Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Service;
