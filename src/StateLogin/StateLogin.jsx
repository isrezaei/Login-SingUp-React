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
    wait : false
}


export const Reducer = (State , Data) => {

    switch (Data.Type) {

        case CaseLoadin.LoginWait :
            console.log(Data.Type)
            return {
                login : false,
                user : null,
                error : null,
                logout: null,
                wait : true
            }

        case CaseLoadin.LoginSuccess :
            console.log(Data.Type)
            return {
                login : true,
                user : Data.User,
                error : null,
                logout: null,
                wait : false
            }

        case  CaseLoadin.LoginError :
            console.log(Data.Type)
            return {
                login : false,
                user : false,
                error : true,
                logout: null,
                wait: false
            }

        case CaseLoadin.LogOut :
            console.log(Data.Type)
            return {
                login : false,
                user : null,
                error : null,
                logout: true,
                wait: false
            }

    }
}

