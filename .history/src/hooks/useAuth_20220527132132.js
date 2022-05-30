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
    const [error, setError]=useState();
    const signIn = async (email, password) =>{
        const options ={
            headers:{
                accept:'*/*',
                'Content-Type': 'application/json',
            },

        };
        const {data: access_token} = await axios.post(endPoints.auth.login, {email, password}, options);
        if(access_token){
            const token = access_token.access_token;
            Cookie.set('token', access_token.access_token, {expires: 15} );
            
            axios.defaults.headers.Autorizations =` Bearer ${token}`;
            const {data: user} = await axios.get(endPoints.auth.profile);
            console.log(user);
            setUser(user);
        }
    };
    return{
        user,
        error,
        setError,
        signIn,
    };

}