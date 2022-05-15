import Paint from "./Paint";

const Lane = (props) => {
    const status = props.status;
    const paint = props.paint;

    function checkStatusAndDisplay(status){
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
        {
            console.log("Lane paint:" + paint)
        }
        <h2 className="ui horizontal divider header">
            {checkStatusAndDisplay(status)}
        </h2>
        <div className="ui cards">
            <Paint paint={paint}></Paint>
        </div>
        </>
    );
}

export default Lane;
//<Paint colour={props.colour} id={props.id} status={props.status}/>