import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from  "react-icons/io5";
import { IoMailUnread } from 'react-icons/io5'
import './Footer.css'

export default function Footer () {
    return(
        <div>
        <footer className="foot">
        <a className="link" href="mailto: mkla.w.b@gmail.com"> {<IoMailUnread className="link"/>}</a>
        <a className="link" href="https://github.com/MikiWolfe" target="_blank">  {<IoLogoGithub className="link"/>} </a>
        <a className="link" href="https://twitter.com/MikiiWolf" target="_blank">{<IoLogoTwitter className="link"/>}</a>
      </footer>
            <div className="made"> Made by MikiWolfe 🤘 2022 </div>
</div> 
    )
}
