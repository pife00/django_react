type Props ={
    title:string,
    description:string,
}

export function Card({title,description}:Props){
    return(
        <div className="max-w-sm rounded-xl bg-gray-200 p-3 m-3" >
            <h3 className="text-lg text-gray-900 font-semibold" >{title} </h3>
            <br />
            <p className="text-gray-900" >{description} </p>
        </div>
    )
}