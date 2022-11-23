import axios from 'axios'

export async function advancedSearch(queryparam,page){
  let result = {}
  let resp = []
try{
    const response = await axios.get(`https://jleao.com/LibPDFAPI/advsearch/${page}`,queryparam)
    resp = response.data
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
