import { useState } from "react" ;

import NewComment from "./NewComment" ;
import EditPost from "./EditPost";

const PostsList = ({posts, getPosts}) => {
    const [newCommentSection , setNewCommentSection] = useState(false);
    const [changedPostId, setchangedPostId] = useState('');
    const [editPostSection, setEditPostSection] = useState(false)
    
    //Like ClassNames
    const liked = 'flex justify-start hover:border rounded-lg w-min px-1 cursor-pointer bg-blue-400'  
    const unLiked = 'flex justify-start hover:border rounded-lg w-min px-1 cursor-pointer'
    
    const deletePost = (id)=>{
        fetch(`http://127.0.0.1:5000/posts/delete/${id}`,{
            method : 'DELETE',
            headers : {'Content-type':'application/json'},
        })
        .then(()=>{
            getPosts();
        })
    }

    const likePost = (id) =>{
        fetch(`http://127.0.0.1:5000/posts/editlike/${id}`,{
            method : 'PUT',
            headers : {'Content-type':'application/json'},
        })
        .then(()=>{
            getPosts();
        })
    }
    
    const editPost = (id) =>{
        setEditPostSection(true)
        setchangedPostId(id);
    }

    const addComment = (id) =>{
        setchangedPostId(id);
        setNewCommentSection(true);
    }

    const deleteComment = (postId, commentId ) =>{
        const deletedComment = {
            post_id : postId,
            comment_id : commentId
        };
        fetch('http://127.0.0.1:5000/posts/deleteComment',{
            method : 'PUT',
            headers : {'Content-type':'application/json'},
            body:JSON.stringify(deletedComment)
        })
        .then(()=>{
            getPosts();
        })
    }


    return ( 
        <div className="w-4/5">
            {posts.map((post)=>(
                    <div className="p-1 m-1" key={post.id}> 
                        {/* POSTS DETAILS */}
                        <div className='bg-slate-50 flex justify-between p-1 m-1 shadow-inner rounded-lg'>
                        {/* (TITLE+CONTENT)+(LIKE+COMMENT) */}
                            <div className='divide-y w-full'>
                                {/* TITLE + CONTENT */}
                                <div className='p-1'>
                                    <h3 className='font-semibold break-all'>{post.title}</h3>
                                    <p className='break-all'>{post.content}</p>
                                </div>
                                {/* LIKE + COMMENT */}
                                <div className='flex justify-start p-1'> 
                                    {/* LIKE  */}
                                    <div onClick={()=>likePost(post.id)} className={post.status ? liked : unLiked}>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 30 25" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z" />
                                        </svg>
                                        <button>Like</button>
                                    </div>
                                    {/* COMMENT */}
                                    <div onClick={()=>addComment(post.id)} className='flex justify-start hover:border rounded-lg w-min px-1 cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                                        </svg>
                                        <button>Comment</button>
                                    </div>
                                </div>
                            </div>
                            {/* DELETE POST + EDIT POST */}
                            <div className="flex justify-end">
                                <svg onClick={()=>editPost(post.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 5 40 30" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                                </svg>
                                <svg onClick={()=>deletePost(post.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 5 40 30" strokeWidth={1.5} stroke="#dc2626" className="w-6 h-6 cursor-pointer">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                                </svg>
                            </div>
                        </div>
                        {post.comments.map((comment)=>(
                            <div className="grid justify-items-center">
                                <div className="w-11/12 bg-indigo-200 px-1 mb-1 hover:border shadow-inner rounded-md border-indigo-200 flex justify-between" key={comment.id}>
                                    <p>{comment.content}</p>
                                    <svg onClick={()=>deleteComment(post.id ,comment.id)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 25" strokeWidth="1.5" stroke="#dc2626" className="w-6 h-6 cursor-pointer">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9.75L14.25 12m0 0l2.25 2.25M14.25 12l2.25-2.25M14.25 12L12 14.25m-2.58 4.92l-6.375-6.375a1.125 1.125 0 010-1.59L9.42 4.83c.211-.211.498-.33.796-.33H19.5a2.25 2.25 0 012.25 2.25v10.5a2.25 2.25 0 01-2.25 2.25h-9.284c-.298 0-.585-.119-.796-.33z" />
                                    </svg>
                                </div>
                            </div>
                        ))}
                    </div>
            ))}
            <div className="grid justify-items-center">
                {newCommentSection && <NewComment getPosts={getPosts} setNewCommentSection={setNewCommentSection} changedPostId={changedPostId} />}
                {editPostSection && <EditPost getPosts={getPosts} changedPostId={changedPostId} setEditPostSection={setEditPostSection}/>} 
            </div>
        </div>
     );
}
 
export default PostsList;