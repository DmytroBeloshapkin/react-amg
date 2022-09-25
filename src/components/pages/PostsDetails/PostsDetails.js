import {useLocation} from "react-router-dom";

import css from './PostsDetails.module.css'

const PostsDetails = () => {

    let location = useLocation()
    console.log(location.state);
    let {state: post} = location

    return (
        <div>
            <div className={css.namePage}>Post pages</div>

            <div className={css.post}>
                <p><b>postId:</b> {post.postId}</p>
                <p><b>id:</b> {post.id}</p>
                <p><b>name:</b> {post.name}</p>
                <p><b>email:</b> {post.email}</p>
                <p><b>body:</b> {post.body}</p>
            </div>
        </div>
    );
};

export {PostsDetails};
