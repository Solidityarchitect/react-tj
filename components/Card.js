import React from "react";

export default function Card(props){
    return(
        <div className="card">
            <div className="card--content">
                <img src={`../images/${props.img}`} className="card--image" />
                <div className="card--text">
                    <div className="card--stats">
                        <img src="../images/location.png" className="card--location" />
                        <span className="card--location">{props.location}</span>
                        <a className="card--maps" href={props.googleMapsUrl} target="_blank" rel="noopener noreferrer">View on Google Maps</a>
                    </div>
                    <p className="card--title">{props.title}</p>
                    <span className="card--date">{props.startDate} - {props.endDate}</span>
                    <p>{props.description}</p>
                </div>
            </div>
        </div>
    );
}
