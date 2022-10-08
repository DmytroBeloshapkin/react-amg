const User = ({user}) => {
    return (
        <div>
            <h2>{user.id}. {user.name}</h2>
            <p>{user.email} - {user.address.city}</p>
            <hr/>
        </div>
    );
};

export {User};