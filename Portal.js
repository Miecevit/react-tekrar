import React from 'react';
import {Router, Route, Routes, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";
import Sidebar from "./component/Sidebar.js";

function Portal() {
    return (

    <> 
        <div className="row">
            <div className="col-4">
                <Sidebar 
                    gor_to="BasvuruGoruntule"
                    form_to="BasvuruFormu"/>
            </div>
            <div className="col-8">
               
                <h1>Başvuru Portal'ina hoşgeldiniz!</h1>
            </div>
        </div>
    </> 

    );
}

export default Portal;