import {Router, Route, Routes, Link} from 'react-router-dom';

function Sidebar(props){

    return(
        <>
        {/*SIDEBAR*/}
        <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark" style={{width: "280px"}}>
                    <a href="/portal" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">

                    <span className="fs-4">Sidebar</span>
                    </a>
                    <hr/>
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item">
                            <Link className={`nav-link ${props.form_active} ${props.form_disable}`} 
                                    aria-current="page" 
                                    to={`${props.form_to}`}
                                    >
                                        Başvuru Formu</Link>
                        </li>
                        <li>
                            <Link className={`nav-link ${props.gor_active} ${props.gor_disable}`} 
                                    aria-current="page" 
                                    to={`${props.gor_to}`}
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
        </>
    );


}

export default Sidebar;