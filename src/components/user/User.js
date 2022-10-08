const User = ({user,showUser}) => {
    return (
        <div>
            <h4>{user.id}. {user.name}</h4>
            <p>{user.email}</p>
            <button onClick={()=>{
                showUser(user)
            }}>Click</button>
            <hr/>
        </div>
    );
};

export {User};