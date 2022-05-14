import Header from "./Header";
import Paint from "./Paint";

const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="ui container">
        
        <h2 className="ui horizontal divider header"><i className="large plus icon"></i> Add New Paint</h2>
        
        <h2 className="ui horizontal divider header"><i className="large tint icon"></i> Current Inventory</h2>

        <div className="ui equal width center aligned padded grid">
            <div className="ui column olive">
              <div className="ui cards">
                <Paint />
              </div>
            </div>            
            <div className="ui column yellow">
              <div className="ui cards">
                <Paint />
                <Paint />
                <Paint />
              </div>
            </div>
            <div className="ui column orange">
              <div className="ui cards">
                <Paint />
              </div>
            </div>
        </div>
      </div>
    </div>

  );
}

export default App;
