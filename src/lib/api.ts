import axios from "axios";

export const handleGetProduct = async () => {
    return await axios.get("http://localhost:5000/products")
}