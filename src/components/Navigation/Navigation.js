import React, { PureComponent } from 'react';
import { AppBar, Toolbar, Button, IconButton } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Home from '@material-ui/icons/Home';
import PowerOff from '@material-ui/icons/PowerOff';
import { usersConstants } from "../../constants/usersConstants";

import './Navigation.css';

class Navigation extends PureComponent {
  state = {
    users: {
      loggedIn: false,
      token: 0
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { users } = nextProps;

    if (users) {
      return {
        users
      }
    }

    return null;
  }

  logout = () => {
    const { dispatch, history } = this.props;

    if (this.state.users.loggedIn) {
      dispatch({type: usersConstants.LOGOUT});

      if (sessionStorage.getItem('auth')) {
        sessionStorage.removeItem('auth');
      }

      history.push('/login');
    }
  };

  render(){
    const { users } = this.state;

    const IsLogged = () => {
      return (
        <>
          <Link to='/'>
            <IconButton color="inherit" className={`${this.props.match.url === '/' ? 'activeBtn' : ''}`}>
              <Home  />
            </IconButton>
          </Link>
          <div>
            <Link to='/dashboard'>
              <Button color="inherit" className={`${this.props.match.url === '/dashboard' ? 'activeBtn' : ''}`}>
                Dashboard
              </Button>
            </Link>
            <Button color="inherit" onClick={this.logout}>
              <PowerOff />
            </Button>
          </div>
        </>
      );
    };

    const UnLogged = () => {
      return (
        <>
          <Link to='/'>
            <IconButton className={`${this.props.match.url === '/' ? 'activeBtn' : ''}`} color="inherit">
              <Home />
            </IconButton>
          </Link>
          <Link to='/login'>
            <Button color="inherit" className={`${this.props.match.url === '/login' ? 'activeBtn' : ''}`}>
              Connexion
            </Button>
          </Link>
        </>
      );
    };

    return (
      <>
        <AppBar color='secondary'>
          <Toolbar className='navigation'>
            {users && !users.loggedIn ? <UnLogged /> : <IsLogged />}
          </Toolbar>
        </AppBar>
      </>
    )
  }
}

export default Navigation;