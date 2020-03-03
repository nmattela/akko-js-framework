import { SyncComponent } from '@nmattela/akko';
import AsyncTest from "../AsyncTest/AsyncTest";

class App extends SyncComponent {
    constructor() {
        super();

        this.initState({
            counter: 0
        });

        this.children = {
            AsyncTest: new AsyncTest()
        }
    }

    render() {
        return (
            <div>
                <h1>{this.state.counter}</h1>
                <button onClick={() => this.state.counter++} >Go up</button>
                <this.children.AsyncTest counter={this.state.counter} />
            </div>
        );
    }
}

export default App