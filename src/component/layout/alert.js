import React,{ useContext } from 'react';
import AlertContext from '../../context/alert/alertContext';

function Alert() {
    const alertContext = useContext(AlertContext);
    // console.log(alertContext);
    const {alert} = alertContext
    return (
         alert != null && <div className={`alert alert-${alert.type}`}>
             {alert.msg}
         </div> 
    )
}

export default Alert;