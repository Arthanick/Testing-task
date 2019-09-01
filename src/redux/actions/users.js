export const NEW_USER = "NEW_USER";
export const CURRENT_USER = "CURRENT_USER";
export const EDIT_USER = "EDIT_USER";

export function newUser(user) {
    return {
        type: NEW_USER,
        user,
    }    
}

export function getCurrentUser(id) {
    return {
        type: CURRENT_USER,
        id,
    }    
}

export function editUser(user, id) {
    console.log("BBBBBB", user, id)
    return {
        type: EDIT_USER,
        user,
        id,
    }    
}