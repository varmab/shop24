import React, { useState, useEffect} from 'react'
import Header from '../components/Global/Header'
import Shop from '../components/Home/Shop'
import Footer from '../components/Global/Footer'

const HomePage=(props)=>{
    return(
        <React.Fragment>
            <Header/>
            <Shop/>
            <Footer/>
        </React.Fragment>
    )
}

export default HomePage;