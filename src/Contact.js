import React from "react"

export default function Contact(props) {
   return(
      <div className="contact-card">
        <img src={props.imgCover} alt=""/>
        <h3>{props.name}</h3>
        <div className="info-group">
        <img src="https://img.icons8.com/material-outlined/24/000000/phone.png" alt=""/>
            <p>{props.tel}</p>
        </div>
        <div className="info-group">
            <img src="https://img.icons8.com/ios-filled/50/000000/apple-mail.png" alt="" />
            <p>{props.email}</p>
        </div>
      </div>
    )

}
