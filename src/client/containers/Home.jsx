import React from 'react';

class Home extends React.Component {
    render() {
        const homeStyle = {
            padding: 200,
            margin: 100,
            textAlign: 'center',
            fontSize: 32,
            color: '#82c3a2',
            backgroundColor: '#245b42'
        }
        return (
            <div style={homeStyle}>
                Home
            </div>
        );
    }
}

export default Home;
