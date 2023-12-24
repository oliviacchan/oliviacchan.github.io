import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '/vite.svg'
import profilePic from '../images/profile.jpg'

export default function Info() {
    const [count, setCount] = useState(0)
    return (
        <nav>
            <img src={profilePic} className="info-photo"></img>
            <h1 className="info-name">Olivia Chan</h1>
            <h3 className="info-major">Pursuing a Degree in Computer Science</h3>
            <h5 className="info-email-address">ochan32@vt.edu</h5>
            <div className="info-list">
                <p className="info-email">Email</p>
                <p className="info-link">LinkedIn</p>
            </div>
            <h1 className="heading">About</h1>
            <p className="stuff">I am junior majoring in Computer Science. My interests revolve around UI/UX. I am learning ReactJS and I hope to create my own website in the future to allow others to get to know me a bit more.</p>
            <h1 className="heading">Interests</h1>
            <p className="stuff">Jump Rope, Golf, Music, Coffee fanatic, Hiking, Biking, Climbing, Reading, Coder.</p>
            <p className="footer">@2023 Chan Development. All rights reserved.</p>
        </nav> 
    )
}