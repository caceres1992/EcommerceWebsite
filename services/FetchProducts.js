import axios from "axios"

export const fetchAllProduct = async () => {
    try {
        const response = await axios.get('http://localhost:1337/api/items')
        console.log(response.data)
        return response.data

    } catch (error) {
        console.log(error)
    }
}