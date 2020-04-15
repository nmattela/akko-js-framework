import { SyncComponent } from 'akko-js';
import AsyncTest from "../AsyncTest/AsyncTest";

class App extends SyncComponent {
    constructor(props) {
        super(props);

        this.initState({
            counter: 0
        });
    }

    render() {
        return (
            <div>
                <button onClick={() => this.state.counter++} >Go up!</button>
                <h1>App: {this.state.counter}</h1>
                <AsyncTest counter={this.state.counter} />
            </div>
        )
    }
}

export default App