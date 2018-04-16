export const 
    REQUEST_SIGN_IN = 'REQUEST_SIGN_IN', 
    SIGN_IN_SUCESS = 'SIGN_IN_SUCESS',
    SIGN_IN_ERROR = 'SIGN_IN_ERROR';



export const signIn = () => {
    return {
        type: REQUEST_SIGN_IN
    }
};

export const handleSignInSuccess = (data) => {
    return {
        type: SIGN_IN_SUCESS
        //mettre les données
    } 
};

export const handleSignInError = (data) => {
    return {
        type: SIGN_IN_ERROR
        //mettre l'erreur
    }
};


export const fetchSignIn = (login, password) => {
    //dispatch signIn
    //fetch
    //dispatch handleSignInSuccess
    //ou
    //dispatch handleSignInError
};




