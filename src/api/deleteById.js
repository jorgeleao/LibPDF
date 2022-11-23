import axios from 'axios'

export async function deleteById(id){
    let result = {}
    let resp = []
    try{
        const response = await axios.delete(`https://jleao.com/LibPDFAPI/deletebyid/${id}`)
        if(response.data[0].success){
            return response.data
        }else{
            result = {"success":false}
            resp.push(result)
        }
    }catch(error){
        if (error.response) {
            console.log(error.status)
        } else {
            console.log(error.message)
        }
        result = {"success":false}
        resp.push(result)
    }  
    return resp
  }
