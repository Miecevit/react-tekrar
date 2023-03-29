import React, {useState} from 'react';
import Sidebar from './Sidebar.js';
import axios from 'axios';

function BasvuruFormu(){

    const [isim, setIsim] = useState('');
    const [soyisim, setSoyisim] = useState('');
    const [bolum, setBolum] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const id = sessionStorage.getItem('id');

    const handleSubmit = async (e) => {

        e.preventDefault();

        try{

            const response = await axios.post("http://localhost:3001/formGonder",{
                id,
                isim,
                soyisim,
                bolum
            }
            );
            console.log(response);
            if(response.status === 200){
                setSuccess("Basvuru basarili sekilde alindi.");
                setIsim('');
                setSoyisim('');
                setBolum('');
                setError('');
            }else{
                
                setError(response.data.error);
            }


        }catch(err){
            setError("Veritabani baglantisinda hata olustu. ", err);
        }
    }

    return(
        <div className="row">
            <div className="col-4">
                <Sidebar 
                    form_active="active" 
                    form_disable="disabled" 
                    gor_to="/portal/BasvuruGoruntule"/>
            </div>
            <div className="col-8">
            <h2>Basvuru Formu</h2>
            <form onSubmit={handleSubmit}>
            <input type="text" 
                        placeholder="İsminiz" 
                        value={isim} 
                        onChange= {(e) => setIsim(e.target.value)}
                        required /><br/>
            <input type="text"
                        placeholder="Soyisminiz"
                        value={soyisim}
                        onChange= {(e) => setSoyisim(e.target.value)}
                        minLength = "2"
                        required /><br/>
            <input type="text"
                        placeholder="Bolumunuz"
                        value={bolum}
                        onChange= {(e) => setBolum(e.target.value)}
                        minLength = "3"
                        required /><br/>
            <button type="submit">Basvuru Gonder</button>
            </form>
            {error && <p style={{color: 'red'}}> {error} </p>}
            {success && <p style={{color: 'green'}}> {success} </p>}
            </div>
        </div>
    );

}

export default BasvuruFormu;