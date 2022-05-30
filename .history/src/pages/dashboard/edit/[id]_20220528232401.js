import React, {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import FormProduct from '@components/FormProduct';
import axios from 'axios';

export default function Edit(){
    const [product, setProduct] = useState({});
    const router = useRouter();
    useEffect(()=>{
        const {id} = router.query;
       
        async function getProduct(){
            const response = await axios.get();
            setProduct(response.data)
        }
        getProduct()
    }, [router?.isReady]);
    return(
        <>
            <FormProduct/>
        </>
    )
};
