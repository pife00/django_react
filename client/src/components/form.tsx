import {useForm,SubmitHandler} from 'react-hook-form'
import { Tasks } from '../models/tasks'
import post_task from '../api/post/post_taks';
export default function Form(){
    const {register,handleSubmit,reset} = useForm<Tasks>()

    const onSubmit:SubmitHandler<Tasks> = async (data) => {
        await post_task(data)
        reset();

    }
    return(
        <div className="flex justify-center" >
            <div className=" max-w-md  bg-gray-100 p-3 space-y-2">
                <form className="space-y-2" onSubmit={handleSubmit(onSubmit)} >
                    <div>
                    <label htmlFor="">Title</label>
                    <input id="title" type="text" className=" rounded-xl focus:ring-gray-500  border p-2 border-gray-200 block w-full" required  
                    {...register('title',{required:true})}
                    />
                    </div>

                    <div>
                    <label htmlFor="">Description</label>
                    <textarea 
                    {...register('description',{required:true})}
                    className=" rounded-xl p-2 border border-gray-200 block w-full"   name="description" id="description" cols={30} rows={10} required />
                    </div>

                    <div className="space-x-2" >
                    <label htmlFor=""><span className="px-2" >Done</span>
                      <input 
                      {...register('done')}
                      type="checkbox" />
                    </label>
                    </div>

                    <input type="submit" className=" hover:cursor-pointer p-3 bg-teal-500 hover:bg-teal-700 text-white font-semibold w-full rounded-xl" value="Send Data" />
                    
                </form>
            </div>
        </div>
    )
}