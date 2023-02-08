

function reducer(state,action){
    
    
 switch(action.type){
    case "admin":
       let admin=state.admin
       let user;
       if(admin===true){
          user=false
       } else{
        user=true
       }
        
        return {
            ...state,
             admin:!admin,
             user:!user
        }
    
    case "user":
       let users=state.user;
       let admins;
       if(users===true){
        admins=false
       } else{
        admins=true
       }
        return {
            ...state,
            user:!users,
            admin:!admins
        }

        case "admin_signup_page" :
            return {
                ...state,
                adminsignuppage:true,
                usersignuppage:false
            }

            case "user_signup_page":
                return {
                    ...state,
                    adminsignuppage:false,
                    usersignuppage:true
                }
                case "authorised_admin_user":
                    return {
                        ...state,
                        isAdminAuth:true,
                        isUserAuth:false
                    }
                    case "authorised_user_user":
                        return {
                            ...state,
                            isUserAuth:true,
                            isAdminAuth:false
                        }
                        case "user_name":
                            return {
                                ...state,
                                username:action.payload
                            }
                            case "user_email":
                            return {
                                ...state,
                                useremail:action.payload
                            }
                            case "checkin_btn":
                                return {
                                    ...state,
                                    inbtndisable:true,
                                    outbtndisable:false
                                }
                                case "checkout_btn":
                                    return {
                                        ...state,
                                        outbtndisable:true,
                                        inbtndisable:false
                                    }
                            case "logout_btn":
                                return {
                                    ...state,
                                    admin :false,
                                    user:false,
                                    adminsignuppage:false,
                                    usersignuppage:false,
                                    isAdminAuth:false,
                                    isUserAuth:false,
                                    username:"",
                                    useremail:"",
                                    inbtndisable:true,
                                    outbtndisable:false,
                                    singleuserid:""
                                }
                                case "is_auth":
                                    return {
                                        ...state,
                                        isAuth:!state.isAuth
                                    }
    
    default:{
        return state;
    }
 }
}

export default reducer