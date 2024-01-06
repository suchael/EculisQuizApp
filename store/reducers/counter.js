const initialState = {
 
    message: 'Hello, Redux!',
    username: 'New User',
    email: '',
    phonenumber: '',
    auth_token: '',
    usertype: '',
    logged: '0',
    pic_url: '',
    wallet: '0',
    user_id: '',
    state: '',
    dlines: '',
    reflink: '',
    usertype:'',
    firstname: '',
    lastname: '',
    role: '',
    state: '',
    usertype: "0",



    

  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
   
      case 'UPDATE_MESSAGE':
        return {
          ...state,
          message: action.payload
        };


        case 'UPDATE_LOG':
          return {
            ...state,
            logged: action.payload
          };



            case 'UPDATE_HOME':
              return {
                ...state,
              home_address: action.payload
              };

              case 'UPDATE_WORK':
                return {
                  ...state,
                work_address: action.payload
                };

                case 'UPDATE_PP':
                  return {
                    ...state,
                    pic_url: action.payload
                  };
              case 'UPDATE_PRONOUNS':
                    return {
                      ...state,
                      pronoun: action.payload
                    };
                    case 'UPDATE_DLINES':
                      return {
                        ...state,
                        dlines: action.payload
                      };      
                      case 'UPDATE_REFLINK':
                        return {
                          ...state,
                          reflink: action.payload
                        };             
                  
  


        case 'UPDATE_GENDER':
        return {
          ...state,
          gender: action.payload
        };
        case 'UPDATE_WALLET':
          return {
            ...state,
            wallet: action.payload
          };

        case 'UPDATE_ADD':
          return {
            ...state,
            address: action.payload
          };

          case 'UPDATE_DOB':
            return {
              ...state,
              dob: action.payload
            };

        case 'UPDATE_NAME':
          return {
            ...state,
            username: action.payload
          };


          case 'UPDATE_FIRST':
          return {
            ...state,
            firstname: action.payload
          };

          case 'UPDATE_LAST':
          return {
            ...state,
            lastname: action.payload
          };

          case 'UPDATE_ROLE':
            return {
              ...state,
              role: action.payload
            };

            case 'UPDATE_STATE':
            return {
              ...state,
              state: action.payload
            };

            case 'UPDATE_TYPE':
            return {
              ...state,
              usertype: action.payload
            };

       

          case 'UPDATE_ID':
            return {
              ...state,
              user_id: action.payload
            };

            
        case 'UPDATE_TOKEN':
        return {
          ...state,
          auth_token: action.payload
        };

        case 'UPDATE_EMAIL':
            return {
              ...state,
              email: action.payload
            };
            case 'UPDATE_LOGI':
              return {
                ...state,
                logitude: action.payload
              };


              case 'UPDATE_LATI':
                return {
                  ...state,
                  latitude: action.payload
                };



                case 'UPDATE_LOCATION':
                return {
                  ...state,
                  locale: action.payload
                };
                case 'UPDATE_TYPE':
                return {
                  ...state,
                  user_type: action.payload
                };
                case 'UPDATE_IDCARD':
                  return {
                    ...state,
                    id_card: action.payload
                  };

            // case 'UPDATE_CORDINATES':
            //   return {
            //     ...state,
            //     logitude: action.payload,
            //     latitude: action.payload
            //   };


      default:
        return state;
    }
  };
  
  export default counterReducer;
  