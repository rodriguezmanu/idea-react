import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getIdeas } from '../../actions/ideas.actions';


class Ideas extends React.PureComponent {
  componentWillMount() {
    const { getIdeas } = this.props;
    getIdeas();
  }

  render() {
    return (
      <div>
        <h1>Ideas</h1>
      </div>
    );
  }
}

Ideas.propTypes = {
  ideas: PropTypes.shape({}).isRequired,
  getIdeas: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ ideas: state.ideas });
export default connect(mapStateToProps, { getIdeas })(Ideas);
