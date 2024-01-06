const initialState = {
    username: '',
    email: '',
  
  };
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'UPDATE_USER_DETAILS':
        return {
          ...state,
          ...action.payload,
        };
    
      default:
        return state;
    }
  };
  
  export default userReducer;
  