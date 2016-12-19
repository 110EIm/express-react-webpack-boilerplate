import React from 'react';

class Footer extends React.Component {
    render() {
        const footerStyle = {
            margin: 40,
            padding: 30,
            backgroundColor: '#33d1c4',
            textAlign: 'center'
        };
        return (
            <div style={footerStyle}>
                <h2>Footer</h2>
            </div>
        );
    }
}

export default Footer;
