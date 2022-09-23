import {Link} from "react-router-dom";

export default function Comment(props) {

    const {comment} = props;

    return (
        <div>
            <p>postId: {comment.postId}</p>
            <p>id: {comment.id}</p>
            <p>name: {comment.name}</p>
            <p>email: {comment.email}</p>
            <p>body: {comment.body}</p>
            <button><Link to = {'/comments?postid='+comment.postId} state = {{...comment}}>select post</Link></button>
            <hr/>
        </div>
    );
}


