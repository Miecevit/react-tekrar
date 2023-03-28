import React, {useState} from 'react';
import {Link} from 'react-router-dom';

function Registerf() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passRepeat, setPassRepeat] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

   const handleSubmit = async (e) => {
        e.preventDefault();

        if(password != passRepeat){
            setError("Sifreler eslesmiyor!");
            return;
        }


        try{

            const response = await fetch('http://localhost:3001/kayit', {
                method: 'POST',
                headers: {'Content-type':'application/json'
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            if(response.status === 200){
                setSuccess('Kayit Basarili. Simdi giris yapabilirsiniz.');
                setEmail('');
                setPassword('');
                setPassRepeat('');
                setError('');
            }else{
                setError('Kayit olusturulurken bir hata olustu.');
            }


        }catch (err){
            setError('Kayit olusturulurken bir hata olustu.');
        }


        
        
        
    }

    return (
        <div>
            <h2>Kayıt</h2>
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
                        minLength = "6"
                        required />
            <input type="password"
                        placeholder="Şifre Tekrar"
                        value={passRepeat}
                        onChange= {(e) => setPassRepeat(e.target.value)}
                        minLength = "6"
                        required />
            <button type="submit">Kayıt Ol</button>
            </form>
            {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}
            <p>
                Hesabınız var mı? <Link to="/">Giriş Yap</Link>
            </p>
        </div>
    );
}

export default Registerf;