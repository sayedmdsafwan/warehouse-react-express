import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("http://localhost:4000/inventory")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="container" id="services">
            <h2 className="text-danger display-6 text-center my-5 text-uppercase">
                total stocks: {services.length}
            </h2>
            <div className="row g-5">
                {services
                    .map((service) => (
                        <Service key={service._id} service={service}></Service>
                    ))
                    .slice(0, 6)}
            </div>
            <button className="btn btn-lg btn-danger d-block mx-auto mt-4">
                Manage Inventory
            </button>
        </div>
    );
};

export default Services;
