import React, { createContext, useReducer, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "config/firebase";

export const AuthContext = createContext();

const initialState = {isAuthenticated : false};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { isAuthenticated: true,};
    case "LOGOUT":
      return { isAuthenticated: false };

    default:
      return state;
  }
};

const AuthContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {

    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        dispatch({type : "LOGIN"});
        // ...
      } else {
        // User is signed out
        // ...
        dispatch({type : "LOGOUT"});
        console.log("User has not signed up yet");
      }
    });

  }, []);


  return (
    <AuthContext.Provider value={{...state, dispatch, }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
