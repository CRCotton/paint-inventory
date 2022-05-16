import React from "react";

const Paint = ({paint, onAdd, onSubtract}) => {


    return(
        <><div className="content">
            <div className="header left floated" key="{paint.key}">{paint.colour}</div>
            <div className="header right floated"><i className="small tags icon"></i><small>{paint.key}</small></div>
        </div><div className="centered content" style={{ backgroundColor: paint.colour }}><i className="circular icon inverted tint"></i></div>
        <div className="extra content">
            <div className="ui small buttons">
                <button className="ui button" onClick={() => onAdd(paint.key)}><i className="plus green icon"></i></button>
                <button className="ui button" onClick={() => onSubtract(paint.key)}><i className="minus red icon"></i></button>
            </div>
        </div>
                </>
                );
}
                export default Paint;

