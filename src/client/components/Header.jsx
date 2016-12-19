import React from 'react';

class Header extends React.Component {
    render() {
        const headerStyle = {
            padding: 100,
            margin: 30,
            backgroundColor: '#44d4a4',
            textAlign: 'center'
        }
        return (
            <div style={headerStyle}>
                <h2>Header</h2>
            </div>
        );
    }
}

export default Header;
