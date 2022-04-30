import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch("services.json")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, []);

    return (
        <div className="container" id="services">
            <h2 className="text-danger display-6 text-center my-5 text-uppercase">
                total fruits: {services.length}
            </h2>
            <div className="row g-5">
                {services.map((service) => (
                    <Service service={service}></Service>
                ))}
            </div>
        </div>
    );
};

export default Services;
