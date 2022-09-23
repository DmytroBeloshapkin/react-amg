export default function Album(props) {

    const {album} = props;

    return (
        <div>
            <p>userId: {album.userId}</p>
            <p>id: {album.id}</p>
            <p>title: {album.title}</p>
            <hr/>
        </div>
    );
}