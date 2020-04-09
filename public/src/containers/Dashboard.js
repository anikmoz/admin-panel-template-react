import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.generateText = this.generateText.bind(this);
  }

  generateText = () => {
    return ['asb', 'abd', 'ewe', 'ewe'];
  };

  render() {
    return (
      <div>
        {this.generateText().map((text, index) => (
            <div key={index}>{text}</div>
          )
        )}
      </div>
    );
  }

}

Dashboard.propTypes = {
  match: PropTypes.object
};

export default connect()(Dashboard);