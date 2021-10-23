import "./App.scss";
import Topbar from "./components/topbar/Topbar.js";
import Dashboard from "./Dashboard"; //importing dashbaord index.js
import style from "./App.scss";

function App() {
  return <div className={style.App}>
    <Dashboard/>
    </div>;
}

export default App;





//{`${styles.description} ${styles.yellow}`}
