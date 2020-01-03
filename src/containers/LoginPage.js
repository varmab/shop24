import React, { useState, useEffect} from 'react'
import Header from '../components/Global/Header'
import Login from '../components/Account/Login'
import Footer from '../components/Global/Footer'

const LoginPage=(props)=>{
    return(
        <React.Fragment>
            <Header/>
            <Login/>
            <Footer/>
        </React.Fragment>
    )
}

export default LoginPage;