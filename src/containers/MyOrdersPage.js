import React, { useState, useEffect} from 'react'

import Header from '../components/Global/Header'
import MyOrders from '../components/Account/MyOrders'
import Footer from '../components/Global/Footer'

const MyOrdersPage=(props)=>{
    return(
        <React.Fragment>
            <Header/>
            <MyOrders/>
            <Footer/>
        </React.Fragment>
    )
}

export default MyOrdersPage;