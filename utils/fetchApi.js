import axios from 'axios'

export const baseUrl = 'https://bayut.p.rapidapi.com'
const config = {
    headers: {
        'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
        'X-RapidAPI-Key': process.env.NEXT_PUBLIC_API_KEY_HOUSE
    }
}

export const fetchApi = async(url)=>{
    const {data} = await axios.get((url), config)
    return data
}

