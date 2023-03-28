import axios from 'axios';
import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

async function SignOut(){

    const id = sessionStorage.getItem("id");
    const Navigate = useNavigate();

    try{

        const response = await axios.post('http://localhost:3001/signout',
            {id}
        );

        if(response.status === 200){
          
        }else{
            alert("Şu an cikisinizi yapamiyoruz.");
        }


    }catch(err){
        console.error(err);
    }

}

export default SignOut;