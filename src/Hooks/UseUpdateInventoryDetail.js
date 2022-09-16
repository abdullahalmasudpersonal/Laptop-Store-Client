import { useEffect, useState } from "react"

const UseInventoryDetail = inventoriesId =>{
    const [inventories, setInventories] = useState({});

    useEffect( () =>{
        const url =`https://computer-accessories-warehouse.herokuapp.com/inventories/${inventoriesId}`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setInventories(data));
    },[inventoriesId]);
    return [inventories];
}

export default UseInventoryDetail;