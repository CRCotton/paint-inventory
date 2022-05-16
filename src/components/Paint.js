import React from "react";

const Paint = ({paint, onAdd, onSubtract}) => {


    return(
        <><div className="content">
            <div className="header left floated" key="{paint.key}">{paint.colour}</div>
            <div className="header right floated"><i className="small tag icon"></i>#{paint.key}</div>
        </div><div className="centered content" style={{ backgroundColor: paint.colour }}><i className="circular icon inverted tint"></i></div><div className="extra content">
                <span className="left floated">
                    <button className="ui icon button" onClick={() => onAdd(paint.key)}><i className="plus green icon"></i></button>
                </span>
                <span className="right floated">
                    <button className="ui icon button" onClick={() => onSubtract(paint.key)}><i className="minus red icon"></i></button>
                </span>
            </div></>
    );
    
}

export default Paint;
