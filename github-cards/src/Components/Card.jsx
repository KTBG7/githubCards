import React from 'react'
import '../Styles/card.css'

function Card(props) {

    
    return (
        <div className="github-profile">
            <img className="avatar" src={props.avatar_url} alt="place-holder"/>
            <div className="info">
                <div className="name">{props.name}</div>
                <div className="company">{props.company == null ? "Not Employeed" : props.company}</div>
            </div>
        </div>
    )
}

export default Card
