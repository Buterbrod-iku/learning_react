import logo from './logo.svg';
import './App.css';
import Design from "./components/MainDesignComponents/design";
import VariableColor from "./components/VariableColorWithInput/VariableColor";
import IncrementDecrement from "./components/IncrementDecrement/IncrementDecrement";
import CreatePost from "./components/CreatePost/CreatePost";



function App() {
    return (
        <div className="App">
            <Design content={<VariableColor />}/>
            <Design content={<IncrementDecrement />} />
            <Design content={<CreatePost />}/>
        </div>
    );
}

export default App;
