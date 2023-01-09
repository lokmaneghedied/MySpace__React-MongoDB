import {useState} from 'react'
import {useNavigate} from 'react-router-dom';

const LogIn = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const handlLogIn = (e) => {
        e.preventDefault();
        navigate(`/user/${email}`);
    };
    const handlCreateNewAccount = () =>{
        navigate('/NewAccount')
    };

    return ( 
        <div className="grid justify-items-center p-1 m-1 shadow-xl bg-white font-serif rounded-lg min-h-min w-4/6 md:w-1/3 divide-y divide-slate-400 ">
            <form onSubmit={handlLogIn} className='grid justify-items-center content-center'>
                <div className='p-2 space-y-4'>
                    <input className="border border-slate-400 rounded w-full p-2 bg-indigo-50 h-12" type="email" placeholder='E-mail' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <input className="border border-slate-400 rounded w-full p-2 bg-indigo-50 h-12" type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <button className="bg-blue-500 text-white w-full h-12 p-1 font-medium rounded-lg hover:shadow-lg">LogIn</button>
                </div>
                    <p className='p-2 text-sm font-bold'>Forgot password ?</p>
            </form>
            <div className='grid content-center'>
                <button className="bg-green-400 text-white p-2 m-2 font-medium rounded-lg hover:shadow-lg" onClick={handlCreateNewAccount}>Create New Account</button>
            </div>
        </div>
     );
}
 
export default LogIn;