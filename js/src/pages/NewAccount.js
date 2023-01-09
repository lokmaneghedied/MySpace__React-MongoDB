import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewAccount = () => {
    const [firstName, setFirstName] = useState();
    const [lastName, setLastName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const navigate = useNavigate();

    const handlCreate = (e) =>{
        e.preventDefault();
        navigate(`/user/${email}`)
    }

    return ( 
        <div className="bg-blue-100 min-h-screen grid justify-items-center content-center">
            <div className="p-1 m-1 min-w-min md:w-1/3 shadow-xl bg-white font-serif rounded-lg divide-y divide-slate-400">
                <div className="flex justify-between">
                    <div className="p-2">
                        <h3 className="font-semibold">sign Up</h3>
                        <p>it's quick and easy</p>
                    </div>
                    <svg onClick={()=>{navigate('/')}} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 25" strokeWidth="2" stroke="#dc2626" className="w-6 h-6 m-2 hover:shadow cursor-pointer">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </div>
                <form onSubmit={handlCreate} className='grid justify-items-center content-center' >
                    <div className="space-y-2 p-2">
                        <input className="border border-slate-400 rounded w-full p-2 bg-indigo-50 h-10" type="text" placeholder="First Name" value={firstName} onChange={(e)=> setFirstName(e.target.value)} />
                        <input className="border border-slate-400 rounded w-full p-2 bg-indigo-50 h-10" type="text" placeholder="Last Name" value={lastName} onChange={(e)=> setLastName(e.target.value)} />
                        <input className="border border-slate-400 rounded w-full p-2 bg-indigo-50 h-10" type="email" placeholder="E-mail" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
                        <input className="border border-slate-400 rounded w-full p-2 bg-indigo-50 h-10" type="password" placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} required/>
                    </div>
                    <button className="w-1/3 bg-green-400 text-white p-2 m-2 font-medium rounded-lg hover:shadow-lg">Create</button>
                </form>
            </div>
        </div>
     );
}
 
export default NewAccount;