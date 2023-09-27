import axios from 'axios'

export const sofaService = {
    getProduct:async()=>{
        try {
            const response = await axios.get('https://dummyjson.com/products')
            return response.data
        } catch (error) {
            throw new Error(error)
        }
    }
}