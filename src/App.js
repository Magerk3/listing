
import "./App.css";
import { data } from "./data";
import { Listing } from "./components/Listing";

function App() {
    
    return (
        <div>
            <Listing items={data} />
        </div>
    );
}

export default App;
