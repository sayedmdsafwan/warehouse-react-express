import { Link } from "react-router-dom";
import useServices from "../../hooks/useServices";
import Service from "../Service/Service";

const Services = () => {
    const [services] = useServices();

    return (
        <div className="container" id="services">
            <h2 className="text-danger display-6 text-center my-5 text-uppercase">
                Inventory
            </h2>
            <div className="row g-5">
                {services
                    .map((service) => (
                        <Service key={service._id} service={service}></Service>
                    ))
                    .slice(0, 6)}
            </div>
            <Link to="/inventories" className="text-decoration-none">
                <button className="btn btn-lg btn-danger d-block mx-auto mt-4">
                    See All Items
                </button>
            </Link>
        </div>
    );
};

export default Services;
