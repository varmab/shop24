import React, { useState, useEffect} from 'react'
import Header from '../components/Global/Header'
import Register from '../components/Account/Register'
import Footer from '../components/Global/Footer'

const RegisterPage=(props)=>{
    return(
        <React.Fragment>
            <Header/>
            <Register/>
            <Footer/>
        </React.Fragment>
    )
}

export default RegisterPage;