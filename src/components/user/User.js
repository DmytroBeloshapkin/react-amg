const User = ({user, lift}) => {
    return (
    <div>
        <h4>{user.id}. {user.name}</h4>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.address.city}</p>

        <button onClick={()=>{
            lift(user)
        }}>details</button>

        <hr/>
    </div>
    );
};

export {User};