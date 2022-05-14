const Paint = (props) => {
    const colour = props.colour;
    const id = props.id;
    const isColourSet = false;

    return(
        <div className="card">
                  <div className="content">
                    <div className="header">{isColourSet ? colour : 'placeholder'}</div>
                  </div>
                  <div className="ui bottom attached button">
                    <i className="pencil icon"></i>
                    Update
                  </div>
                </div>
    );
    }

export default Paint;