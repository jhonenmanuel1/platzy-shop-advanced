    const API = process.env.NEXT_PUBLIC_API_URL;
    const VERSIONJN = process.env.NEXT_PUBLIC_API_VERSION;
    const endPoints = {
        auth:{
            login: `${API}/api/v1/auth/login`,
        },
    }