import React, { useState, useContext, createContext} from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';
import endPoints from '@services/api/'
const AuthContext = createContext();

export function ProviderAuth({children}){
    const auth =useProviderAuth();
    return <AuthContext.Provider value={auth}>
        {children}
    </AuthContext.Provider>;
}

export const useAuth = ()=> {
    return useContext(AuthContext);

}

function useProviderAuth(){
    const[user, setUser] = useState(null);
    const [errorLogin, setErrorLogin] = useState(null);
    const signIn = async (email, password) =>{
        const submitHandler = (event) => {
            event.preventDefault();
            const email = emailRef.current.value;
            const password = passwordRef.current.value;
            setErrorLogin(null);
            setLoading(true);
            auth
              .signIn(email, password)
              .then(() => {
                route.push('/dashboard');
              })
              .catch(function (error) {
                if (error.response?.status === 401) {
                  setErrorLogin('Usuario o password incorrecto.');
                } else if (error.request) {
                  setErrorLogin('Tenemos un problema');
                } else {
                  setErrorLogin('Algo salió mal.');
                }
                setLoading(false);
              });
          };

        const options ={
            headers:{
                accept:'*/*',
                'Content-Type': 'application/json',
            },

        };
        const {data: access_token} = await axios.post(endPoints.auth.login, {email, password}, options);
        if(access_token){
            Cookie.set('token', access_token.access_token, {expires: 15} );
        } else{
            alert('Usuario no autorizado')
        }
    };
    return{
        user,
        signIn,
    };

}