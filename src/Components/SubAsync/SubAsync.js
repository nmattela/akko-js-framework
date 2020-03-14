import { AsyncComponent, SyncComponent } from '@nmattela/akko';

class SubAsync extends AsyncComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return [0, 1, 2].map(i => <SubSubAsync key={i} idx={i} counter={this.props.counter}/>)
    }
}

export default SubAsync

class SubSubAsync extends AsyncComponent {
    constructor(props) {
        super(props);

        this.initState({clicked: false})
    }

    render() {
        return <button onClick={() => this.state.clicked = true} >{this.state.clicked}</button>
    }
}