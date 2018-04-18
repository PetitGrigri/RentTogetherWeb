import $ from 'jquery';


export const 
    SIGN_IN_REQUEST = 'SIGN_IN_REQUEST', 
    SIGN_IN_SUCESS = 'SIGN_IN_SUCESS',
    SIGN_IN_ERROR = 'SIGN_IN_ERROR';


export const handleSignIn = (login, password) => {
    
    var basicAuth = btoa(this.login+':'+this.password);
    console.log(basicAuth);

    /*
    return {
        type: REQUEST_SIGN_IN
    }*/

    return function (dispatch) {
        
        dispatch({
            type: SIGN_IN_REQUEST
        })

        //remplacer /json/login.json par : http://renttogetherapi-api.azurewebsites.net/api/Login'
        //remplacer par fetch ? 
        $.ajax({
            type: 'GET',
            url: '/json/login.json',
            //url :'http://renttogetherapi-api.azurewebsites.net/api/Login',
            headers: {
                'Authorization': 'Basic ' + basicAuth
            },
            success : function(data) {
                console.log('connecté');
                console.log(data);
                setTimeout(() => {
                    dispatch(handleSignInSuccess(data))
                },1000);
            },
            error: function(jqXHR, textStatus, errorThrown) {
                console.log('erreur');
                console.log('//TODO',jqXHR, textStatus, errorThrown );
                setTimeout(() => {
                    dispatch(errorThrown(errorThrown))
                },1000);
            }
        });
    }
    

};

export const handleSignInSuccess = (data, redirectionSuccess) => {
    return {
        type:       SIGN_IN_SUCESS,
        firstName: "Test",
        lastName:  "Super",
        redirectionPath: redirectionSuccess

        //mettre les données
    } 
};

export const handleSignInError = (error) => {
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




