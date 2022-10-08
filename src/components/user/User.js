const User = ({user}) => {
    return (
    <div>
        <h4>{user.id}. {user.name}</h4>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address.city}</p>
        <p>{JSON.stringify(user)}</p>
        <hr/>
    </div>
    );
};

export {User};