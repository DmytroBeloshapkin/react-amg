import {Link} from "react-router-dom";

import css from './Comment.module.css'

export default function Comment(props) {

    const {comment} = props;

    return (
        <div className={css.comment}>
            <div>
                <p>postId: {comment.postId}</p>
                <p>id: {comment.id}</p>
                <p>name: {comment.name}</p>
                <p>email: {comment.email}</p>
                <p>body: {comment.body}</p>
            </div>
            <button className={css.button}><Link to={'/comments/' + comment.postId} state={{...comment}}>select
                post</Link></button>
        </div>
    );
}


