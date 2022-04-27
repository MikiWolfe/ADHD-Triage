import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoTwitter } from  "react-icons/io5";
import { IoMailUnread } from 'react-icons/io5'

export default function Footer () {
    return(
        <div>
        <footer id="Contact" className="bar">
        <a className="link" href="mailto: mkla.w.b@gmail.com"> {<IoMailUnread />}</a>
        <a className="link" href="https://github.com/MikiWolfe" target="_blank">  {<IoLogoGithub />} </a>
        <a className="link" href="https://twitter.com/MikiiWolf" target="_blank">{<IoLogoTwitter />}</a>
      </footer>
</div> 
    )
}
