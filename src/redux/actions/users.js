export const NEW_USER = "NEW_USER";
export const CURRENT_USER = "CURRENT_USER";

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