import React from "react";
import LoggedOutNavigation from '../Navigation/LoggedOutNavigation';
import Footer from "./Footer";
import Video from "./Video";
import Album from "./Album";

function Home() {

    return (

        <main>
            <h1>hello</h1>
         <LoggedOutNavigation/> 
         <Video/>
         <Album/>
         <Footer/>
        </main>
    )
}

export default Home