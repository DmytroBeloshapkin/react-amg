import css from './Post.module.css'

export default function Post(props) {

    const {post} = props;

    return (
        <div className={css.Post}>
            <h4>userId: {post.userId}</h4>
            <h4>id: {post.id}</h4>
            <h4>title: {post.title}</h4>
            <p>completed: {post.body}</p>
        </div>
    );
}
