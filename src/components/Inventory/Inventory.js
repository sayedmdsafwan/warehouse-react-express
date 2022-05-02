import React from "react";
import { Button, Card, Form, ListGroup, ListGroupItem } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import useInventoryDetail from "../../hooks/useInventoryDetails";
import Loading from "../Loading/Loading";

const Inventory = () => {
    const { id } = useParams();
    const [user, loading] = useAuthState(auth);

    const [inventory] = useInventoryDetail(id);

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

    if (loading) {
        return <Loading />;
    }
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
                                    Quantity: {inventory.quantity} tons
                                </ListGroupItem>
                                <ListGroupItem>
                                    Price: ${inventory.price}/tons
                                </ListGroupItem>
                                <ListGroupItem>
                                    ID: {inventory._id}
                                </ListGroupItem>
                            </ListGroup>
                            <Card.Body>
                                <Card.Link className="btn btn-danger" href="#">
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
