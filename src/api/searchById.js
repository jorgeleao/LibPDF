import axios from 'axios'

export async function searchById(id){
    let result = {}
    try{
        const response = await axios.get(`http://localhost:3001/searchbyid/${id}`)
        result = response.data
    }catch(error){
        if (error.response) {
            console.log(error.status)
        } else {
            console.log(error.message)
        }
        result = {"success":false}
    }  
    return result
  }
