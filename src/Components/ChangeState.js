import { SyncComponent } from '@nmattela/akko';

class ChangeState extends SyncComponent {
    constructor(props) {
        super(props);

        this.initState({changed: false})
    }


    render() {
        return (
            <div>
                {
                    this.state.changed
                        ?'You did it!'
                        :'State not yet changed'
                }
                <button onClick={() => this.state.changed = true} >Change my state</button>
            </div>
        )
    }
}

export default ChangeState