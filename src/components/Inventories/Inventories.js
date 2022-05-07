import React from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Loading from "../Loading/Loading";
import Service from "../Service/Service";

const ManageInventory = () => {
    const [services, setServices, loading] = useServices();
    const navigate = useNavigate();

    if (loading) {
        return <Loading />;
    }

    return (
        <div className="container pb-5">
            <h2 className="text-danger display-6 text-center my-5 text-uppercase">
                total items in stock: {services.length}
            </h2>
            <div className="row g-5 mb-5">
                {services.map((service) => (
                    <Service key={service._id} service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default ManageInventory;
