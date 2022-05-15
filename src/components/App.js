import Header from "./Header";
//import Paint from "./Paint";
import React from "react";
//import AddPaint from "./AddPaint";
//import Lane from "./Lane";
//import PaintList from "./PaintList";
import KanbanBoard from "./KanbanBoard";


const App = () => {
  //Paint template
  const paint1 = {key:"01", colour:"Blue", status:2};
  const paint2 = {key:"02", colour:"Grey", status:1};
  const paint3 = {key:"03", colour:"Black", status:2};
  const paint4 = {key:"04", colour:"White", status:0};
  const paint5 = {key:"05", colour:"Purple", status:0};

  const paints = [paint1, paint2, paint3, paint4, paint5];

  return (
    <div className="App">
      <Header />
      <div className="ui container">
        
        <KanbanBoard paints={paints} />
        
      </div>
    </div>
  );
}

export default App;
