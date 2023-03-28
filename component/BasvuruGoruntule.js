import Sidebar from './Sidebar.js';

function BasvuruGoruntule(){

    return(
        <div className="row">
            <div className="col-4">
                <Sidebar 
                    gor_active="active" 
                    gor_disable="disabled"
                    form_to="/portal/BasvuruFormu"/>
            </div>
            <div className="col-8">
                <h1>BURADA GORUNTULEME ICERIGI VAR!</h1>
            </div>
        </div>
    );

}

export default BasvuruGoruntule;