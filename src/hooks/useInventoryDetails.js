import { useEffect, useState } from "react";

const useInventoryDetail = (id) => {
    const [inventory, setInventory] = useState({});

    useEffect(() => {
        fetch(`https://pacific-anchorage-26116.herokuapp.com/inventory/${id}`)
            .then((res) => res.json())
            .then((data) => setInventory(data));
    }, [id]);

    return [inventory];
};

export default useInventoryDetail;
