import { useState } from "react";

const EditPost = ({changedPostId, setEditPostSection}) => {

    const [newTitle, setNewTitle] = useState('');
    const [newContent, setNewContent] = useState('');

    const editPost = (e)=>{
        e.preventDefault();
        const changedPost = {
            'id' : changedPostId,
            'title' : newTitle,
            'content' : newContent,
        };
        setNewTitle('');
        setNewContent('');
        setEditPostSection(false);
        fetch('http://127.0.0.1:5000/posts/editPost',{
            method:'PUT',
            headers : {'Content-type':'application/json'},
            body: JSON.stringify(changedPost)
        });
    }

    return ( 
        <div className="w-2/4 p-1 m-1 shadow-lg bg-indigo-100 rounded-xl">
            <form onSubmit={editPost}>
                {/* INPUTS */}
                <div className="grid justify-items-start">
                    <input className="border border-slate-400 rounded w-full p-1 mb-1 bg-indigo-50" type="text" placeholder="New Title" onChange={(e)=>{setNewTitle(e.target.value)}} />
                    <textarea className="border border-slate-400 rounded w-full p-1 mb-1 bg-indigo-50" placeholder="New Content" onChange={(e)=>{setNewContent(e.target.value)}}/>
                </div>
                {/* BUTTONS */}
                <div className="flex justify-end p-1 ">
                    <button className="bg-green-400 p-1 mx-1 rounded-lg hover:shadow-lg">Save</button>
                    <button className="bg-red-600 p-1 mx-1 rounded-lg hover:shadow-lg" onClick={()=>{setEditPostSection(false)}}>Cancel</button>
                </div>
            </form>
        </div>
     );
}
 
export default EditPost;