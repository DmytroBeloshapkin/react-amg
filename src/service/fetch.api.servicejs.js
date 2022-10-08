export let fetch = fetch('https://jsonplaceholder.typicode.com/users')
    .then((value) => value.json())
