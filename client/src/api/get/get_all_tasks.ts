import axios from 'axios'

export default async function get_all_tasks(){
    const res = await axios.get("http://localhost:8000/tasks/api/v1/tasks/")
    const data = res.data
   
    return data
}