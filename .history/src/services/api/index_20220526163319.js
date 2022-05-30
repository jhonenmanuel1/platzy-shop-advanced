    const API = process.env.NEXT_PUBLIC_API_URL;
    const VERSION = process.env.NEXT_PUBLIC_API_VERSION;
    const endPoints = {
        auth:{
            login: `${API}/api/${VERSION}/auth/login`,
            profile: `${API}/api/${VERSION}/auth/profile`,
        },
        products:{
            getProduct: (id)=> `${API}/api/${VERSION}/products/${id}/`,
            getProducts: (limit,offset) => `${API}/api/${VERSION}/products?limit=${limit}&offset=${offset}`,
            updateProduct: (id)=>`${API}/api/${VERSION}/products/${id}`,
            addProducts: `${API}/api/${VERSION}/products`,
            deleteProducts: (id) => `${API}/api/${VERSION}/products/${id}/`
        }
        ,  
        users:{
            users:`${API}/api/${VERSION}/users`,
            aviableUser: `${API}/api/${VERSION}/users/is-aviable`
        },
        categories: {
            getCategoriesList: `${API}/api/${VERSION}/categories/`,
            addCategory: `${API}/api/${VERSION}/categories/`,
            updateCategories : (id)=> `${API}/api/${VERSION}/categories/${id}/`,
            getCategoriesProducts : (id)=> `${API}/api/${VERSION}/categories/${id}/products/`
        },
        files:{
            addImage: `$(API)/api/${VERSION}/files/upload/`,
        },
        
    }

    export default endPoints;