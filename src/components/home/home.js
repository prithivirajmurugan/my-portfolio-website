import React from 'react';
import "./home.css";
import Header from '../header/header.js'
import Footer from '../footer/footer.js'
import Body from '../body/body.js'

function Home() {
    return (
        <div className="home">
            <div>
                
                <Header></Header>
            </div>
            <div>
                
                <Body></Body>
            </div>
            <div>
                
                <Footer></Footer>
           </div>
        </div>
    )
}

export default Home
