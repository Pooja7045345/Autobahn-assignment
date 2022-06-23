
export function GetUserAction(data) {
    return {
        type:'get_post',
        payload: data,
    }
}

export function PostUserAction(data) {
    return {
        type:'add_post',
        payload: data,
    }
}

export function UpdateUserAction(data) {
    return {
        type:'update_post',
        payload: data,
    }
}
export function DeleteUserAction(data) {
    return {
        type:'delete_post',
        payload: data,
    }
}