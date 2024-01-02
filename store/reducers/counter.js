const initialState = {
    count: '0',
    message: 'Hello, Redux!',
    username: '',
    email: '',
    phonenumber: '',
    auth_token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkVsQGdtYWlsLmNvbSIsImlhdCI6MTcwMTY5NjEwNCwiZXhwIjoxNzMzMjUzNzA0fQ.sX9RqJM6hPdyRrYolPOzDa1lddPMhP0HVdwPg5pbKIQ',
    usertype: '',
    pronoun: 'He',
    logged: '0',
    pic_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ12seFJhxPY1fuHI07hnqEUF9ITm9YN5_3MlHU00&s',
    id_card: '',
    ssn: '',
    wallet: '0',
//    home_address: '',
    logitude: '',
    latitude: '',
    user_id: '',
    home_address: '',
    work_address: '',
    address: '',
    gender: '',
    dlines: '',
    reflink: '',
    locale: '',
    car_per_hr: '',
    car_per_hr_2: '',


    

  };
  
  const counterReducer = (state = initialState, action) => {
    switch (action.type) {
   
      case 'UPDATE_MESSAGE':
        return {
          ...state,
          message: action.payload
        };

        case 'UPDATE_PHONE':
          return {
            ...state,
            phonenumber: action.payload
          };

          case 'UPDATE_SSN':
            return {
              ...state,
              ssn: action.payload
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
          case 'UPDATE_IMG':
            return {
              ...state,
              pic_url: action.payload
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
  