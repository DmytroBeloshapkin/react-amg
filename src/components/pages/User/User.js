function User (props) {
    const {user} = props;

    return (
        <div className='user'>
            <p>id: {user.id}</p>
            <p>name: {user.name}</p>
            <p>username: {user.username}</p>
            <p>email: {user.email}</p>
            <p>id: {user.phone}</p>
            <hr/>
        </div>
    );
}

export {User};