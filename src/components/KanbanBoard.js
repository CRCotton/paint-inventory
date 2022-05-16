import React from "react";
import PaintList from "./PaintList";

const KanbanBoard = ({paints, onAdd, onSubtract}) => {

    // Filter lists based on swim lanes of availability
    const availablePaints = paints.filter(item => (item.status === 2));
    const lowPaints = paints.filter(item => (item.status === 1));
    const outPaints = paints.filter(item => (item.status === 0));


    return(
        <div className="ui container">
            <h2 className="ui horizontal divider header"><i className="large tint icon"></i> Current Inventory</h2>

            <div className="ui equal width center aligned padded grid">
                <div className="ui column olive">
                    <h2 className="ui horizontal divider header">Available</h2>
                    <div className="ui cards">
                        <PaintList paints={availablePaints} onAdd={onAdd} onSubtract={onSubtract} />
                    </div>
                </div>
                <div className="ui column yellow">
                    <h2 className="ui horizontal divider header">Low</h2>
                    <div className="ui cards">
                        <PaintList paints={lowPaints} onAdd={onAdd} onSubtract={onSubtract} />
                    </div>
                </div>
                <div className="ui column orange">
                    <h2 className="ui horizontal divider header">Out</h2>
                    <div className="ui cards">
                        <PaintList paints={outPaints} onAdd={onAdd} onSubtract={onSubtract} />
                    </div>
                </div>
            </div>      
        </div>
    );
}

export default KanbanBoard;