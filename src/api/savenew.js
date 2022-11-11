import axios from 'axios'

export async function savenew(bodyparam){
  let result = {}
  let resp = []
  try{
    const response = await axios.post("http://localhost:3001/savenew",bodyparam)
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
