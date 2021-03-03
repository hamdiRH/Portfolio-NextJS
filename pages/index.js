import React, {Fragment} from 'react';
import Banner from '../components/Banner';
import About from '../components/About';
import Education from '../components/Education';
import Skill from '../components/Skill';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Experience from '../components/Experience';
import Scrollbar from '../components/scroolbar'
import Navbar from '../components/Navbar';
// import Work from '../components/Work';



const HomePage =() => {
    return(
        <Fragment>
            <Navbar /> {/** */}
            <Banner/>
            <About/>
            <Education/>
            <Experience/>
            {/* <Work/> */}
            <Skill/>
            <Contact/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default HomePage;


