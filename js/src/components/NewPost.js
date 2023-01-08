import { useState } from "react";

const NewPost = ({setNewPostSection}) => {
    const [title, setTitle] = useState(null);
    const [content, setContent] = useState(null);
    
    const handlNewPost = (e) =>{
        e.preventDefault();
        const newPost = {
            'title' : title,
            'content': content,
            'status': false,
            'comments':[],
        } ;
        fetch('http://127.0.0.1:5000/posts/newPost',{
            method: 'POST' ,
            headers: {'Content-type':'application/json'},
            body: JSON.stringify(newPost)
        })
        .then(
            setNewPostSection(false)
            )            
        }

    return ( 
        <div className="w-2/4 p-2 m-1 shadow-lg bg-indigo-100 rounded-xl">
            <form onSubmit={handlNewPost}>
                {/* INPUTS */}
                <div className="grid justify-items-start">
                    <input className="border border-slate-400 rounded w-full p-1 mb-1 bg-indigo-50" type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)} />
                    <textarea className="border border-slate-400 rounded w-full p-1 bg-indigo-50" placeholder="Content" onChange={(e)=>setContent(e.target.value)} required/>
                </div>
                {/* BUTTONS */}
                <div className="flex justify-end p-1 ">
                    <button className="bg-green-400 p-1 mx-1 rounded-lg hover:shadow-lg">Post</button>
                    <button className="bg-red-600 p-1 mx-1 rounded-lg hover:shadow-lg" onClick={()=> setNewPostSection(false)}>Cancel</button>
                </div>
            </form>
        </div>
     );
}
 
export default NewPost;