import Sidebar from './Sidebar.js';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

function BasvuruGoruntule(){
    
    const [bilgi, setBilgi] = useState('');
    const [error, setError] = useState('');

    useEffect( () => {

        const bilgiGetir = async () => {
                const id = sessionStorage.getItem("id");

                console.log(id);

            try{

                const response = await axios.post("http://localhost:3001/formGoster",
                {id}
            );

            if(response.status===200){
                setBilgi(response.data);
            }

            }catch(err){
                setError("Kullanici bilgileri gosterilemedi.");
            }
        }

        
            bilgiGetir();

    }, []);



    return(
        <div className="row">
            <div className="col-4">
                <Sidebar 
                    gor_active="active" 
                    gor_disable="disabled" 
                    form_to="/portal/BasvuruFormu"/>
            </div>
            <div className="col-8">
            <h2>Basvuru Formu</h2>
            <form>
            <input type="text" 
                        placeholder="İsminiz" 
                        value={bilgi.isim}
                        /><br/>
            <input type="text"
                        placeholder="Soyisminiz"
                        value={bilgi.soyisim}
                       /><br/>
            <input type="text"
                        placeholder="Bolumunuz"
                        value={bilgi.bolum}
                        /><br/>
            
            </form>
            {error && <p style={{color: 'red'}}> {error} </p>}
            </div>
        </div>
    );

}

export default BasvuruGoruntule;