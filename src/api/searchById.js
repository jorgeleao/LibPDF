import axios from 'axios'

export async function searchById(id){
    let result = {success:false,data:''}
    try{
        const response = await axios.get(`http://localhost:3001/searchbyid/${id}`)
        result.success = true
        result.data = response.data
        console.log("=== id:"+id+"\n=== success:"+result.success+"\n=== title:"+result.data.title)
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
