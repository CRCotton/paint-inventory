import React, {useState} from "react";

const Paint = ({paint: {key, colour, status}}) => {

    const paintStatus = status;

    /*
    function checkStatusIncreaseDisplay({status}){
        if(status === "2"){
            return(<button className="ui icon disabled button">);
        } else {
            return(<i className="plus green icon"></i>);
        }
    }*/

    const [state, setState] = useState(paintStatus)

    const increaseStatusOnClick = () => {
        console.log("Increase call from: " + state)
        setState(state + 1)
        console.log(state)
    }

    const decreaseStatusOnClick = () => {
        console.log("Decrease call from: " + state)
        setState(state - 1)
        console.log(state)
    }

    return(
        <div className="ui card" key={ key }>
        <div className="content">
            <div className="header left floated" key="{key}">{ colour }</div>
            <div className="header right floated"><i className="small tag icon"></i>#{ key }</div>
        </div>
        <div className="inverted content"><h3 className="header">{ status }</h3></div>
        <div className="extra content">
            <span className="left floated">
                <button className="ui icon button"><i className="plus green icon" onClick={increaseStatusOnClick}></i></button>
            </span>
            <span className="right floated">
            <button className="ui icon button"><i className="minus red icon" onClick={decreaseStatusOnClick}></i></button>
            </span>
        </div>
        </div>
    );
}

export default Paint;
