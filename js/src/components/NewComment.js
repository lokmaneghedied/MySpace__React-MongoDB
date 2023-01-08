import {useState} from 'react'

const NewComment = ({setNewCommentSection, changedPostId}) => {
    const [content, setContent] = useState('')
   
    const addComment =(e)=>{
        e.preventDefault();
        const comment = {
            'post_id' : changedPostId,
            'content' : content,
        }
        setNewCommentSection(false)
        fetch('http://127.0.0.1:5000/posts/newcomment',{
            method:'PUT',
            headers : {'Content-type':'application/json'},
            body: JSON.stringify(comment)
        })
    }

    return ( 
        <div className="w-2/4 p-1 m-1 shadow-lg bg-indigo-100 rounded-xl">
            <form onSubmit={addComment}>
                <textarea className="border border-slate-400 rounded w-full p-1 mb-1 bg-indigo-50" placeholder='Add comment...' value={content} onChange={(e)=>setContent(e.target.value)} required/>
                <div className="flex justify-end">
                    <button className="bg-green-400 p-1 mx-1 rounded-lg hover:shadow-lg">Add Comment</button>
                    <button className="bg-red-600 p-1 mx-1 rounded-lg hover:shadow-lg" onClick={()=>{setNewCommentSection(false)}}>Cancel</button>
                </div>
            </form>
        </div>
     );
    }
export default NewComment;