import React from "react";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../hooks/useInventoryDetails";

const Inventory = () => {
    const { id } = useParams();
    const [inventory] = useInventoryDetail(id);

    const handleDelivered = () => {
        const newQuantity = parseInt(inventory.quantity) + 1;
        const makeQuantity = newQuantity;
        console.log(makeQuantity);
        fetch(`http://localhost:4000/inventory/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({ makeQuantity }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };

    const handleRestock = (event) => {
        event.preventDefault();
        const reStock = parseInt(event.target.reStock.value);
        console.log(reStock);

        /* fetch(`http://localhost:4000/inventory/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ reStock }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            }); */
        event.target.reset();
    };

    return (
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-md-8">
                    <div>
                        <Card>
                            <Card.Img variant="top" src={inventory.img} />
                            <Card.Body>
                                <Card.Title className="display-5">
                                    {inventory.name}
                                </Card.Title>
                                <Card.Text>{inventory.description}</Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>
                                    Supplier: {inventory.supplier}
                                </ListGroupItem>
                                <ListGroupItem>
                                    <span className="text-danger">
                                        {" "}
                                        Quantity: {inventory.quantity} tons
                                    </span>
                                </ListGroupItem>
                                <ListGroupItem>
                                    Price: ${inventory.price}/tons
                                </ListGroupItem>
                                <ListGroupItem>
                                    ID: {inventory._id}
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link
                                    onClick={handleDelivered}
                                    className="btn btn-danger"
                                >
                                    Delivered
                                </Card.Link>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="sticky-top py-5">
                        <h2 className="text-capitalize mb-4">
                            restock this item
                        </h2>
                        <Form onSubmit={handleRestock}>
                            <Form.Group className="mb-3" controlId="restock">
                                <Form.Control
                                    type="number"
                                    placeholder="Restock Item"
                                    name="reStock"
                                />
                            </Form.Group>
                            <Button variant="danger" type="submit">
                                Restock
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;
