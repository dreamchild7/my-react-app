import React, { Component } from 'react';
import Navbar   from './Navbar';
import Banner from './Banner';
import About from './About';
import Footer from './Footer'


class App extends Component {
    
    render() { 
        return ( 
            <div>
                <Navbar />
                <Banner />
                <About />
                <Footer />
            </div>
         );
    }
}
 
export default App;