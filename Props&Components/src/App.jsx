import "./App.css";
import Card from "./Components/Card";
import teamdata from "./Data.js";

function App() {
  return (
    <div>
      {/* passing the "propname"-prop with the "teamdata" to the ChildComponent "Card.jsx "*/}
      <Card propname={teamdata} />
    </div>
  );
}

export default App;
