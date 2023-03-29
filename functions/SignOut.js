import axios from 'axios';
import React, {useState} from 'react';


async function SignOut(navigate){

    const id = sessionStorage.getItem("id");


    try{

        const response = await axios.post('http://localhost:3001/signout',
            {id}
        );

        if(response.status === 200){
          navigate('/');
        }else{
            alert("Şu an cikisinizi yapamiyoruz.");
        }


    }catch(err){
        console.error(err);
    }

}

export default SignOut;