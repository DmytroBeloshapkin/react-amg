import css from './Album.module.css'

export default function Album(props) {

    const {album} = props;

    return (
        <div className={css.album}>
            <h3>userId: {album.userId}</h3>
            <h3>id: {album.id}</h3>
            <p>title: {album.title}</p>
        </div>
    );
}