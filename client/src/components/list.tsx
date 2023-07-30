import { Tasks } from "../models/tasks"
import { Card } from "./card"

type Props = {
    myList:Tasks[]
}

export default function List({myList}:Props){
    return(
        <>
        <div className="grid grid-cols-3 px-8" >
        {
            myList.map((el)=>{
                return(
                    <Card key={el.id} title={el.title} description={el.description} />
                )
            })
        }

        </div>
        </>
    )
}