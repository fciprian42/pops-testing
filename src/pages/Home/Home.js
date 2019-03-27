import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import EasyTransition from 'react-easy-transition';
import { connect } from 'react-redux';

// Components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

class Home extends PureComponent {
  render() {
    return (
      <div style={{width: '100%'}}>
        <EasyTransition
          path={this.props.location.pathname}
          initialStyle={{opacity: 0}}
          transition="opacity 0.3s ease-in"
          finalStyle={{opacity: 1}}
        >
          <Navigation users={this.props.users} dispatch={this.props.dispatch} history={this.props.history} match={this.props.match} />
          <div className='homepage'>
            <img src="https://pops.co/img/home-bg.png" alt=""/>
          </div>
          <Footer />
        </EasyTransition>
      </div>
    )
  }
}

Home.propTypes = {
  history: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Home);