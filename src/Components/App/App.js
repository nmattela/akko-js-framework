import { SyncComponent } from '@nmattela/akko';
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
                <h1>{this.state.counter}</h1>
                <AsyncTest counter={this.state.counter} />
                <button onClick={() => this.state.counter++} >Go up</button>
            </div>
        );
    }
}

export default App