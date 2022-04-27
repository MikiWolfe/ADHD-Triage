import React from "react";
import './Home.css'

export default function Home () {
    return (
        <div> 
        <h1>Welcome to the ADHD Triage Board</h1>
        <h3> Do you suffer from task over load 
            and don't know which task to tackle first? We have an application for you!
            We have a way for you to be asigned a task and given a time to finish it to help 
            users not get lost in time blindness or get distracted in TikTok time loops or doom scrolling 
            on Twitter. 
        </h3>
        <p> Enter in what activities that you need to do accomplish in a day and you will be asigned a 
            task at random.  We will also link it to sound to help you stay on track.
        </p>
        <button> Press enter to start: </button>
        </div>
    )
}