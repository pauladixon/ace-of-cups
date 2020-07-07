import tokenService from './tokenService'

const BASE_URL = '/api/entries'

export function index() {
    const options = {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function create(entry) {
    const options = {
        method: 'POST', 
        headers: {
            'Content-type': 'application/json',
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(entry)
    }
    return fetch(BASE_URL, options).then(res => res.json())
}

export function update(entry) {
    return fetch(`${BASE_URL}/${entry._id}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json', 
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
        body: JSON.stringify(entry)
    }).then(res => res.json())
}

export function deleteOne(id) {
    const options = {
        method: 'DELETE',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        }
    }
    return fetch(`${BASE_URL}/${id}`, options).then(res => res.json())
}