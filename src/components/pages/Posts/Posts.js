import {useEffect, useState} from "react";

import {pageService} from "../../../service";
import Post from "./Post";


const Posts = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        pageService.getPost().then(value => setPosts(value.data))
    }, []);

    return (
        <div>
            {posts.map((post, index) => (<Post key={index} post={post}/>))}
        </div>
    );
};

export {Posts};