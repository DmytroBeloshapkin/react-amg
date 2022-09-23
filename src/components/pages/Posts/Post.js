export default function Post(props) {

    const {post} = props;

    return (
        <div>
            <p>userId: {post.userId}</p>
            <p>id: {post.id}</p>
            <p>title: {post.title}</p>
            <p>completed: {post.body}</p>
            <hr/>
        </div>
    );
}
