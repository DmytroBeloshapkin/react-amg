import './style.css'

function User(props) {
    const {user, lift} = props;

    return (
        <div className='user'>
            <h4>{user.id}. {user.name}</h4>
            <p>{user.email}test</p>

            <button onClick={() => {lift(user)}}>user address info</button>

        </div>
    );
}

export default User;