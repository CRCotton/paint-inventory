import Lane from "./Lane";

const KanbanBoard = (props) => {

    const paints = props.paints;
    const availablePaints = paints.filter(item => (item.status === 2));
    const lowPaints = paints.filter(item => (item.status === 1));
    const outPaints = paints.filter(item => (item.status === 0));

    return(
        <div className="ui container">
            <h2 className="ui horizontal divider header"><i className="large tint icon"></i> Current Inventory</h2>

            <div className="ui equal width center aligned padded grid">
                <div className="ui column olive">
                <Lane status={'2'}  paints={availablePaints}/>
                
                </div>
                <div className="ui column yellow">
                <Lane status={'1'}  paints={lowPaints}/>
                

                </div>
                <div className="ui column orange">
                <Lane status={'0'}  paints={outPaints}/>
                

                </div>
            </div>
        </div>
    );
}

export default KanbanBoard;