import React from 'react';

const Backdrop = ({ show, onClick }) => {
    return show ? <div className="backdrop" onClick={onClick}></div> : null;
};

export default Backdrop;