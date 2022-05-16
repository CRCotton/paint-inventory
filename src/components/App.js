import Header from "./Header";
import React, {useState} from "react";
import KanbanBoard from "./KanbanBoard";
import EditPaint from "./EditPaint";


const App = () => {
  //Paint template static on each initial load
  const [paints, setPaints] = useState([
    {key:0, colour:"Blue", status:2}, 
    {key:1, colour:"Grey", status:1}, 
    {key:2, colour:"Black", status:2}, 
    {key:3, colour:"White", status:0}, 
    {key:4, colour:"Purple", status:0}])

  //Status bounds
  // 2 = Available, 1 = Running Low, 0 = Out
  const maxStatus = 2;
  const minStatus = 0;


  //Adjust the paint to lower availability and checks to ensure it does not change outside of status bounds
  const addPaint = (key) => {

    let temp_state = [...paints];
    let temp_paint = {...temp_state[key]};

    temp_paint.status = temp_paint.status + 1;

    if(temp_paint.status > maxStatus){
      temp_paint.status = maxStatus
    }

    temp_state[key] = temp_paint;

    setPaints(temp_state);
    console.log(paints.map((paint) =>({paint})))
  }

  //Adjust the paint to lower availability and checks to ensure it does not change outside of status bounds
  const usePaint = (key) =>{

    let temp_state = [...paints];
    let temp_paint = {...temp_state[key]};

    temp_paint.status = temp_paint.status - 1;

    if(temp_paint.status < minStatus){
      temp_paint.status = minStatus
    }

    temp_state[key] = temp_paint;

    setPaints(temp_state);
    console.log(paints.map((paint) =>({paint})))
    }
  

  return (

    <div className="App">
      <Header />
      <div className="ui container">
        <KanbanBoard paints={paints} onAdd={addPaint} onSubtract={usePaint} />
        {
          //<EditPaint paints={paints} onAdd={addPaint} onSubtract={usePaint}/>
        }
      </div>
    </div>
  );
}

export default App;
