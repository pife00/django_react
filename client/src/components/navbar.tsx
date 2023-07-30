import {Link} from 'react-router-dom';

export default function Navbar(){
    return(
        <>
        <nav className="p-3 bg-white border border-gray-200 " >
            <div className="flex justify-between" >
                <div>
                    <Link to="/" className="text-2xl font-semibold text-gray-700" >Django-React</Link>
                </div>
                <div className='space-x-3' >
                    <Link className='text-xl text-gray-900 hover:text-gray-400'  to={"/"} >Home</Link>
                    <Link className='text-xl text-gray-900 hover:text-gray-400'  to={"/add"}>Add</Link>

                </div>
            </div>
        </nav>
        </>
    )
}