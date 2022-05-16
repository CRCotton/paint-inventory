//import Paint from "./Paint";
import PaintList from "./PaintList";

const Lane = (props) => {
    const status = props.status;
    const paints = props.paints;

    function checkStatusAndDisplay(){
        if(status === "2"){
            return("Available")
        } else if(status === "1"){
            return("Running Low")
        } else {
            return("Out")
        }
    };

    
    return(
        <>
        <h2 className="ui horizontal divider header">
            {checkStatusAndDisplay()}
        </h2>
        <div className="ui cards">
            <PaintList status={status} paints={paints}></PaintList>
        </div>
        </>
    );
}

export default Lane;
//<Paint colour={props.colour} id={props.id} status={props.status}/>