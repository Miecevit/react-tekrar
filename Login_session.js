import React, {useState} from 'react';
import {Link, useNavigate} from 'react-router-dom';

function Login_s() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const kullanici_adi = sessionStorage.getItem('email');
        const sifre = sessionStorage.getItem('password');

        if(email == kullanici_adi && password == sifre){

            navigate('/portal');
        }
        else{
            setError('Hatali kullanici adi veya sifre!');
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

            <p>
                Hesabınız yok mu? <Link to="/kayit">Kayıt Ol!</Link>
            </p>
        </div>
    );
}

export default Login_s;