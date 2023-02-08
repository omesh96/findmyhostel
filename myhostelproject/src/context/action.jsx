
export const Admin={type:"admin"}
export const User={type:"user"}

// signup and login page

export const Admin_SignUp_Page={type:"admin_signup_page"}
export const User_SignUp_Page={type:"user_signup_page"}

// Authorized User
export const Authorised_Admin_User={type:"authorised_admin_user"}
export const Authorised_User_User={type:"authorised_user_user"}

// login user and admin name
export const User_Name=(name)=>{
   return {
    type:"user_name",
    payload:name
   }
}
 export const User_Email=(email)=>{
    return {
        type:"user_email",
        payload:email
    }
 }

 // check in check out button
 export const Checkin_btn={type:"checkin_btn"}
 export const Checkout_btn={type:"checkout_btn"}

 // logut 
 export const Logut_btn={type:"logout_btn"}

 // admin and user auth for logout
 export const Is_Auth={type:"is_auth"}