import { SyncComponent } from '@nmattela/akko';

class TestExample extends SyncComponent {
    constructor() {
        super();

        this.initState({
            subtitle: 'How goes?'
        });

        this.children = {
            AnotherComponent: new AnotherComponent()
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World!</h1>
                <this.children.AnotherComponent prop={this.state.subtitle} />
            </div>
        );
    }
}