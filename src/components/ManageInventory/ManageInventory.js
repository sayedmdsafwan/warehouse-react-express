import React from "react";
import { useNavigate } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const ManageInventory = () => {
    const [services] = useServices();
    const navigate = useNavigate();

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
