const Header = () => {
    return(
        <div className="ui inverted menu grey">
                <h1 className="item"><i className="large home icon inverted"></i>A Paint Company</h1>
                <div className="right menu">
                    <div className="item">
                        <div className="ui transparent icon input">
                            <h3 className="item">Edit<i className="edit icon" style={{marginTop: 15, marginLeft: 15, marginBottom: 15}}></i></h3>
                        </div>
                    </div>
                </div>
            </div>

    );
};

export default Header;

