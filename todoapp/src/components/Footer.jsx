import React from "react";
import "./styles.css"

function Footer(){

    var year = new Date().getFullYear()

    return <footer>

        <p>© Copyright {year}</p>

    </footer>


}

export default Footer;