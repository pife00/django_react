import axios from 'axios'
import { Tasks } from '../../models/tasks'

export default async function post_task(data:Tasks){
    await axios.post("http://localhost:8000/tasks/api/v1/tasks/",data)
    .then((res)=>{
        console.log(res)
    }).catch(err=>{
        console.log(err)
    })
}