const HOST = 'http://localhost:8080'

export function checkFollow(idUser, token) {
    const url = `${HOST}/relation?id=${idUser}`
    const params = {
        header: {
            Authorization: `Bearer ${token}`
        },
    }
    return fetch(url, params).then((response) => {
        return response.json()
    }).then((result) => {return result})
    .catch((err) => {return err})
}

export function followUser(idUser, token) {
    const url = `${HOST}/follow?id=${idUser}`
    const params = {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return fetch(url, params).then((response) => {
        return response.json()
    }).then((result) => {return result})
    .catch((err) => {return err})
}
export function unfollowUser(idUser, token) {
    const url = `${HOST}/unfollow?id=${idUser}`
    const params = {
        method: 'DELETE',
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    return fetch(url, params).then((response) => {
        return response.json()
    }).then((result) => {return result})
    .catch((err) => {return err})
}
export function getFollows(paramsUrl, token) {
    const url = `${HOST}/list/users?${paramsUrl}`
    const params = {
        headers: {
            Authorization: `Bearer ${token}`
        },
    }
    return fetch(url, params).then((response => {
        return response.json()
    })).then((result) => {return result})
    .catch((err) => {
        return err
    })
}