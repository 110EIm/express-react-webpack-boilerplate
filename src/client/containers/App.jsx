import React from 'react';
import {Header, Footer} from 'components';

class App extends React.Component {
    render() {
        const appStyle = {
            backgroundColor: '#7fd1d1',
            margin: 50,
            padding: 100
        }
        return (
            <div style={appStyle}>
                <Header/>
                {this.props.children}
                <Footer/>
            </div>
        );
    }
}

export default App;
