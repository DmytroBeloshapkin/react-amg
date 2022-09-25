import {useEffect, useState} from "react";

import {pageService} from "../../../../service";
import Post from "../Post/Post";
import css from './Posts.module.css'


const Posts = () => {

    let [posts, setPosts] = useState([])

    useEffect(() => {
        pageService.getPost().then(value => setPosts(value.data))
    }, []);

    return (
        <div>
            <div className={css.namePage}>All posts page</div>
            <div className={css.Posts}>
                {posts.map((post, index) => (<Post key={index} post={post}/>))}
            </div>
        </div>
    );
};

export {Posts};