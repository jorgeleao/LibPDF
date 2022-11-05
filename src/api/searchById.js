import axios from 'axios'

export async function searchById(id){
    let result = {success:false,data:''}
    try{
        const response = await axios.get(`http://localhost:3001/searchbyid/${id}`)
        result.data = response.data
        result.success = true
    }catch(error){
        if (error.response) {
            console.log(error.status)
        } else {
            console.log(error.message)
        }
        result.success = false
    }  
    return result
  }
