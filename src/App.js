import Clock from './Clock';
import ClassComponent from './ClassComponent';

function App() {
    return (
        <div className="App">
            <h2>Hello world</h2>
            <Clock locale="bn-BD" />
            <ClassComponent local="bn-BD" />
        </div>
    );
}

export default App;
