import React from 'react';
import {Route, Routes, Link} from 'react-router-dom';
import ReactDOM from 'react-dom';

import BasvuruFormu from "./component/BasvuruFormu";
import BasvuruGoruntule from "./component/BasvuruGoruntule";

function Portal() {

    const formTikla = () => {
        ReactDOM.render(<BasvuruFormu />, document.getElementById("sol"));
        document.getElementById("sol").style.display = "block";
        document.getElementById("sag").style.display = "none";
    }

    const goruntuleTikla = () => {
        ReactDOM.render(<BasvuruGoruntule />, document.getElementById("sag"));
        document.getElementById("sag").style.display = "block";
        document.getElementById("sol").style.display = "none";
    }



    return (
<>
        <div className="row">
            <div className="col-4">
                {/*SIDEBAR*/}
                <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px"}}>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                    <span className="fs-4">Sidebar</span>
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link className="nav-link active" 
                                    aria-current="page" 
                                    onClick={formTikla}
                                    >
                                        Başvuru Formu</Link>
                        </li>
                        <li>
                            <Link className="nav-link" 
                                    aria-current="page" 
                                    onClick={goruntuleTikla}
                                    >
                                        Başvuru Görüntüle</Link>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
                        <strong>mdo</strong>
                    </a>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a className="dropdown-item" href="#">New project...</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                    </div>
                </div>
                {/*SIDEBAR END*/}
            </div>
            <div className="col-8" id="icerikDiv">

                <div className="row">
                    <div className="col-6" id="sol" style={{display:"none"}}>

                    </div>
                    <div className="col-6" id="sag" style={{display:"none"}}>

                    </div>
                </div>

            </div>
        </div>
        
</>
    );
}

export default Portal;