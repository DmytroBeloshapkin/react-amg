const url = 'http://owu.linkpc.net/api/v2/cars'

const getCars = () => {
    return fetch(url)
        .then((value) => value.json())
}

export {getCars}