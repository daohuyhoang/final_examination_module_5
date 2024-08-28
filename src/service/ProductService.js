import axios from "axios";

export const getAllProducts = async (name, categoryId) => {
    try {
        let query = "http://localhost:8080/products?";
        if (name) query += `name_like=${name}&`;
        if (categoryId) query += `categoryId=${categoryId}&`;
        query = query.slice(0, -1); // Remove trailing '&'
        let res = await axios.get(query);
        return res.data;
    } catch (e) {
        console.error("Error fetching products", e);
        return [];
    }
}

export const getAllCategories = async () => {
    try {
        let res = await axios.get("http://localhost:8080/categories");
        return res.data;
    } catch (e) {
        console.error("Error fetching categories", e);
        return [];
    }
}

export const saveProduct = async (product) => {
    try {
        await axios.post("http://localhost:8080/products", product);
        return true;
    } catch (e) {
        console.error("Error saving product", e);
        return false;
    }
}
