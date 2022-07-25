import { Login_ERROR, Login_LOADING, Login_SUCCESS, Logout, SIGNUP_ERROR, SIGNUP_LOADING, SIGNUP_SUCCESS } from "./ActionType"
// import { LOGIN_ERROR, LOGIN_LOADING, LOGIN_SUCCESS } from "./Action Type"

const initialState={
    loading:false,
    error:false,
    token:false,
    message:""
}

export const reducer=(state=initialState,{type,payload})=>{
    switch(type){
        case SIGNUP_LOADING:
              return{
                ...state,
                loading:true
              }

        case SIGNUP_SUCCESS:
                return{
                  ...state,
                  loading:false,
                  error:false
              
                } 
                
                case SIGNUP_ERROR:
                    return{
                      ...state,
                      loading:false,
                      error:true
                    } 
                    

                    case Login_LOADING:
                        return{
                          ...state,
                          loading:true
                        }
          
                  case Login_SUCCESS:
                          return{
                            ...state,
                            loading:false,
                            error:false,
                          token:!state.token
                          } 
                          
                          case Login_ERROR:
                              return{
                                ...state,
                                loading:false,
                                error:true
                              } 
                              // case Logout:
                              //   return{
                              //     ...initialState
                              //   }          
                    default:
                        return state
    }
}