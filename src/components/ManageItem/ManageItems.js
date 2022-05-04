import React from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../hooks/useServices";
import { Button, Card } from "react-bootstrap";

const ManageInventory = () => {
    const [services, setServices] = useServices();
    const navigate = useNavigate();

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure?");
        if (proceed) {
            fetch(
                `https://pacific-anchorage-26116.herokuapp.com/inventory/${id}`,
                {
                    method: "DELETE",
                }
            )
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    const remaining = services.filter((s) => s._id !== id);
                    setServices(remaining);
                });
        }
    };

    return (
        <div className="container pb-5">
            <h2 className="text-danger display-6 text-center my-5 text-uppercase">
                Manage Items
            </h2>
            <div className="row g-5 mb-5">
                {services.map((service) => (
                    <div key={service._id} className="col-md-4">
                        <Card>
                            <Card.Img variant="top" src={service.img} />
                            <Card.Body>
                                <Card.Title>
                                    <h2 className="text-danger">
                                        {service.name}
                                    </h2>
                                </Card.Title>
                                <Card.Text>
                                    {service.description.slice(0, 50)}
                                </Card.Text>
                                <div className="row">
                                    <div className="col-md-6">
                                        <p>Price: ${service.price}</p>
                                    </div>
                                    <div className="col-md-6">
                                        <p>Quantity: {service.quantity} tons</p>
                                    </div>
                                </div>

                                <p className="lead">
                                    Supplier: {service.supplier}
                                </p>
                                <Button
                                    onClick={() => handleDelete(service._id)}
                                    variant="danger"
                                    className="w-100 btn-sm"
                                >
                                    Delete Item
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
            <button
                onClick={() => navigate("/additem")}
                className="btn btn-lg btn-danger d-block mx-auto"
            >
                Add Another Item
            </button>
        </div>
    );
};

export default ManageInventory;
