import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Loading from "../Loading/Loading";

const MyItems = () => {
    const [services, setServices, loading] = useServices();

    const navigate = useNavigate();
    const navigateInventoryDetail = (id) => {
        navigate(`/inventory/${id}`);
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container mx-auto py-5">
            <div className="row g-4">
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
                                    onClick={() =>
                                        navigateInventoryDetail(service._id)
                                    }
                                    variant="danger"
                                    className="w-100 btn-sm"
                                >
                                    Manage Stock
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyItems;
