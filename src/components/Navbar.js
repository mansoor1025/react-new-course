import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
export default function Navbar(props) {
    const removeBg = () => {
        document.body.classList.remove('bg-light');
        document.body.classList.remove('bg-dark');
        document.body.classList.remove('bg-primary');
        document.body.classList.remove('bg-secondary');
        document.body.classList.remove('bg-success');
        document.body.classList.remove('bg-warning');
        document.body.classList.remove('bg-danger');
    }

    const changeBg = (color) => {
        removeBg()
        document.body.classList.add('bg-' + color);
    }
    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light`}>
            <Link className="navbar-brand" to="/">{props.title}</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact-us">{props.contact_us}</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/testimonal">Testimonal</Link>
                    </li>
                </ul>
                <div className='d-flex'>
                    <div className='bg-primary rounded mx-2' onClick={() => { changeBg('primary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    <div className='bg-danger rounded mx-2' onClick={() => { changeBg('danger') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    <div className='bg-secondary rounded mx-2' onClick={() => { changeBg('secondary') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    <div className='bg-warning rounded mx-2' onClick={() => { changeBg('warning') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                    <div className='bg-success rounded mx-2' onClick={() => { changeBg('success') }} style={{ height: '30px', width: '30px', cursor: 'pointer' }}></div>
                </div>
                {/* <div className={`custom-control custom-switch ${props.mode === 'light' ? 'text-dark' : 'text-light'}`}>
                    <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={props.toggle_mode} />
                    <label className="custom-control-label" htmlFor="customSwitch1">{props.mode === 'light' ? 'enable dark mode' : 'enable light mode'}</label>
                </div> */}
            </div>
        </nav>
    )
}

Navbar.protoTypes = {
    title: PropTypes.string.isRequired,
    about: PropTypes.string
}

Navbar.defaultProps = {
    title: 'dynamic mani',
    contact_us: "Contact Us"
}
