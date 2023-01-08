import {useParams, useNavigate} from 'react-router-dom';

const NavBar = ( {setNewPostSection} ) => {
    const {email} = useParams();
    const navigate = useNavigate();

    return ( 
        <div className="navbar">
            <nav className='flex justify-between bg-blue-500 rounded-b'>
                <h2 className='py-2 m-2 font-semibold'>{email}</h2>
                <div className='py-1 text-white'>
                    <button className='bg-green-600 p-2 m-1 rounded-lg hover:shadow-lg' onClick={()=>setNewPostSection(true)}>New Post</button>
                    <button className='bg-stone-900 p-2 m-1 rounded-lg hover:shadow-lg' onClick={()=>navigate('/')}>Log Out</button>
                </div>
            </nav>
        </div>
     );
}
 
export default NavBar;