import { useEffect, useState } from "react";

const useInventoryDetail = (id) => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/inventory/${id}`)
            .then((res) => res.json())
            .then((data) => setInventory(data));
    }, [id]);

    return [inventory];
};

export default useInventoryDetail;
