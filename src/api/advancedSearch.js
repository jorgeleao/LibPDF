import axios from 'axios'

export async function advancedSearch(selBoxes,flds){
  let result = {success:false,data:''}
  try{
    const response = await axios.post("http://localhost:3001/advsearch",{id:selBoxes})
    let buff = ''
    let obj = response.data
    obj.forEach((ob => (buff =  buff + 
                                ob.id + ". \""+
                                ob.title + "\" - "+ 
                                ob.author + ", "+ 
                                ob.publisher + ", published:"+
                                ob.from + ". "+ 
                                ob.keywords + "\n\n")))
    result.data = buff
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
