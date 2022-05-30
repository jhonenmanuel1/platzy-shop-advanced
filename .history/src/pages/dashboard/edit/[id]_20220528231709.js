import React, {useEffect, useState} from 'react';
import { useRouter } from "next/router";
import FormProduct from '@components/FormProduct';

export default function Edit(){
    const router = useRouter();
    useEffect(()=>{
        const {id} = router.query;
    }, []);
    return(
        <>
            <FormProduct/>
        </>
    )
};
