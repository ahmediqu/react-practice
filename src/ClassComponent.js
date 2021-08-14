import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
class ClassComponent extends React.Component {
    render() {
        // eslint-disable-next-line react/destructuring-assignment
        return <h1>{new Date().toLocaleTimeString(this.props.local)}</h1>;
    }
}

export default ClassComponent;
