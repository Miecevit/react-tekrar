import Sidebar from './Sidebar.js';

function BasvuruFormu(){

    return(
        <div className="row">
            <div className="col-4">
                <Sidebar 
                    form_active="active" 
                    form_disable="disabled" 
                    gor_to="/portal/BasvuruGoruntule"/>
            </div>
            <div className="col-8">
                <h1>BURADA BASVURU FORMU VAR!</h1>
            </div>
        </div>
    );

}

export default BasvuruFormu;