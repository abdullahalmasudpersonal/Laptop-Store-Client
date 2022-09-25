import { useEffect, useState } from "react"

const UseProductDetail = productsId => {
    const [products, setProducts] = useState({});

    useEffect(() => {
        const url = `https://laptop-server-new.herokuapp.com/products/${productsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [productsId]);
    return [products];
}

export default UseProductDetail;