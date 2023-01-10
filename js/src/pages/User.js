import { useEffect, useState } from "react";

import NavBar from "../components/NavBar";
import PostsList from "../components/PostsList";
import NewPost from "../components/NewPost";

const User = () => {

    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [newPostSection, setNewPostSection] = useState(false)

    const getPosts = () =>{
        fetch('http://127.0.0.1:5000/posts')
        .then((res)=>{
            return res.json();
        })
        .then((data)=>{
            setIsLoading(false);
            setError(null);
            setPosts(data);
        })
        .catch((err)=>{
            setPosts(null);
            setIsLoading(false);
            setError(err.message);
        })
    }

    useEffect(()=>{
        getPosts();
        },[])

    return ( 
        <div className="font-serif bg-blue-100 min-h-screen">
            <NavBar setNewPostSection={setNewPostSection}/>
            <div className="grid justify-items-center">
                {newPostSection && <NewPost setNewPostSection={setNewPostSection} />}
                {isLoading && <h3>loading data.....</h3>}
                {error && <h3>{error}</h3>}
                {posts && <PostsList posts={posts} getPosts={getPosts} />}
            </div>
        </div>
     );
}

export default User;