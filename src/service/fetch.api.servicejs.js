const url = 'https://jsonplaceholder.typicode.com/users'


const getUsers = () =>{
    return fetch(url)
        .then((value) => value.json())
}

const getUser = (id) =>{
    fetch(url+'/'+id)
        .then((value) => value.json())
        .then(value => console.log(value)
        )
}

export {
    getUser, getUsers
}