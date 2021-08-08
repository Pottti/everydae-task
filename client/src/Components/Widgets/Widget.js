import React from 'react'
import "./widgets.scss"

export default function Widget(props) {
    const {utility,data, image,text} = props;
    
    
    return (
        <div className="column">
          
            <div className="widget__body">
                <div className="image">
                    <img src={image} alt="" />
                </div>
                <div className="score">
                 <p>{data} <span>{utility}</span></p>
                </div>
                <div className="text">
                    <p>{text}</p>
                </div>
               
            </div>
        </div>
    )
}
