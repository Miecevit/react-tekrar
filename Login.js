import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try{

            const response = await axios.post('http://localhost:3001/',
                {
                    email,
                    password
                }
            );

            if(response.status === 200){
                if(response.data.message === "1"){
                    sessionStorage.setItem("id", response.data.id);
                    setSuccess('Giriş Başarili. Yonlendiriliyorsunuz...')
                    setTimeout( () => {
                    navigate('/portal');
                }, 2000);  
                }else{
                setError('Kullanici adi veya sifre hatali.');
                }
            }
        }catch(err){
            setError('Kullanici adi ve sifre kontrolünde hata olustu.');
        }


    }


    return (
        <div>
            <h2>Giriş</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                        placeholder="Mail adresiniz" 
                        value={email} 
                        onChange= {(e) => setEmail(e.target.value)}
                        required />
                <input type="password"
                        placeholder="Şifre"
                        value={password}
                        onChange= {(e) => setPassword(e.target.value)}
                        required />
                <button type="submit">Login</button>
            </form>

            {error && <p style={{color:'red'}}> {error} </p> }
            {success && <p style={{color: 'green'}}>{success}</p>}

            <p>
                Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
            </p>
        </div>
    );
}

export default Login;