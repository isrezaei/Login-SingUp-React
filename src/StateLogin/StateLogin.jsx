export const CaseLoadin = {
    LoginWait : 'LoginWait',
    LoginSuccess : 'LoginSuccess',
    LoginError : 'LoginErro',
    LogOut : 'LogOut'
}


export const initState = {
    login : false,
    user : null,
    error : null,
    logout : null,
}


export const Reducer = (State , Data) => {

    switch (Data.Type) {

        case CaseLoadin.LoginWait :
            return {
                login : false,
                user : null,
                error : null,
                logout: null
            }

        case CaseLoadin.LoginSuccess :
            return {
                login : true,
                user : Data.User,
                error : null,
                logout: null
            }

        case  CaseLoadin.LoginError :
            return {
                login : false,
                user : false,
                error : true,
                logout: null
            }

        case CaseLoadin.LogOut :
            return {
                login : false,
                user : null,
                error : null,
                logout: true
            }

    }
}

