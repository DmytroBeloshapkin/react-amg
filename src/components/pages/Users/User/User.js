import css from './User.module.css'

function User (props) {
    const {user} = props;

    return (
        <div className={css.user}>
            <h3>id: {user.id}</h3>
            <h3>name: {user.name}</h3>
            <h3>username: {user.username}</h3>
            <h3>email: {user.email}</h3>
            <h3>id: {user.phone}</h3>
        </div>
    );
}

export {User};