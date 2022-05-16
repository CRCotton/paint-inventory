const EditPaint = ({paints, onAdd, onSubtract}) => {

    function displayAvailiability(status) {
        if(status === 2){
            return('Available')
        } else if(status === 1){
            return('Running Low')
        } else{
            return('Out')
        }
    }

    function displayAvailiabilityColour(status){
        if(status === 2){
            return('forestgreen')
        } else if(status === 1){
            return('yellow')
        } else{
            return('red')
        }
    }

    /** function displayButtonsBasedOnSatus(status,paint){
        return(
            <>
            <button className="ui button" onClick={() => onAddPaint(paint)}>Add Paint</button>
                <div className="or"></div>
            <button className="ui button">Use Paint</button>
            </>
        )
    }*/


    return(
        <div className="ui container" style={{marginTop: 15}}>
            <h2 className="ui horizontal divider header"><i className="large pencil icon"></i> Edit Inventory</h2>
        <div className="ui relaxed divided list">
            {paints.map((paint) => (
                <div className="item" key={paint.key} style={{backgroundColor: displayAvailiabilityColour(paint.status), marginTop: 15, marginLeft: 25, marginBottom: 15}}>
                    <i className="large tint middle aligned icon" style={{marginTop: 15, marginLeft: 30, marginBottom: 15}}></i>
                    <div className="content">
                        <div className="header" style={{marginBottom: 15, marginTop: 5}}><h3>{paint.colour}</h3></div>
                        <div className="description">{displayAvailiability(paint.status)}
                        <div className="ui buttons middle aligned right floated">
                            <button className="ui button" onClick={() => onAdd(paint.key)}>Add Paint</button>
                            <div className="or"></div>
                            <button className="ui button" onClick={() => onSubtract(paint.key)}>Use Paint</button>
                        </div>
                        </div>
                    </div>
                </div>
            ))}
0
        </div>
        </div>
    );
}

export default EditPaint;