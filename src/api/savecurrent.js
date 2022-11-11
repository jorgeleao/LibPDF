import axios from 'axios'

export async function savecurrent(bodyparam,serial){
  let result = {}
  let resp = []
  try{
    const response = await axios.put(`http://localhost:3001/savecurrent/${serial}`,bodyparam)
    result = response.data
  }catch(error){  
    if (error.response) {
        console.log(error.status)
    } else {
        console.log(error.message)
    }
    result.success = false
  }
  resp.push(result)
  return resp
}
