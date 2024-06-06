import React from "react";
import "./Footerstyles.css"

function Footer(){

    var year = new Date().getFullYear()

    return <footer>

        <p>© Copyright {year}</p>

    </footer>


}

export default Footer;