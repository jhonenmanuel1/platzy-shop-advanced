    const API = process.env.NEXT_PUBLIC_API_URL;
    const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
    const endPoints = {
        auth:{
            login: `${API}/api/${VERSION}/auth/login`,
            profile: `${API}/api/${VERSION}/auth/profile`,
        },
        products:{
            getProduct: (id)=> `${API}/api/${VERSION}/products/${id}`,
            postProduct: (id)=>`${API}/api/${VERSION}/products/${id}`
        },
        users:{
            users:`${API}/api/${VERSION}/users`,
            aviableUser: `${API}/api/${VERSION}/users/is-aviable`
        },
        categories: {
            getCategories : (id)=> `${API}/api/${VERSION}/categories/${id}`
        }
        
    }

    export default endPoints;