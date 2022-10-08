const UserDetails = ({user}) => {
    return (
    <div>
            <h4>{user.name} - {user.address.city}</h4>
    </div>
    );
};

export {UserDetails};