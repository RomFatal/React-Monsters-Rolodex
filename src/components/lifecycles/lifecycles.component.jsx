import React from 'react';

class LifeCycles extends React.Component {
    
  constructor() {
    super();
    console.log('constructor!');
  }

  componentDidMount() {
    console.log('componentDidMount!');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate!', nextProps);
    return nextProps.text !== this.props.text;
  }

  render() {
    console.log('render!');
    return (
      <div className='lifecycles'>
        <h3>LIFECYCLES COMPONENT</h3>
        {this.props.text}
      </div>
    );
  }

  componentDidUpdate() {
    console.log('componentDidUpdate!');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount!');
  }

}

export default Lifecycles;
