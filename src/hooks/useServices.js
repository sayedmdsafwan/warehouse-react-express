import { useEffect, useState } from "react";

const useServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://pacific-anchorage-26116.herokuapp.com/inventory`)
            .then((res) => res.json())
            .then((data) => {
                setServices(data);
                setLoading(false);
            });
    }, []);

    return [services, setServices, loading];
};

export default useServices;
