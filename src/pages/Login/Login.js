import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import EasyTransition from 'react-easy-transition';
import { Grid, FormControl, TextField, Button, FormHelperText, Avatar } from '@material-ui/core';
import Security from '@material-ui/icons/Security';

import './Login.css';

// Components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import { usersConstants } from "../../constants/usersConstants";
import axios from "axios";

class Login extends PureComponent {
  state = {
    errors: false,
    username: '',
    password: '',
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

  componentWillUnmount() {
    clearTimeout(this.timer);
  }

  componentDidMount() {
    const { users } = this.state;

    if (users.loggedIn) {
      this.props.history.push('/');
    }
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = (e) => {
    const { history, dispatch } = this.props;
    const { username, password } = this.state;

    e.preventDefault();

    axios({
        method: 'POST',
        url: 'https://4i48oxh8hb.execute-api.us-east-1.amazonaws.com/dev/login',
        data: {
          username,
          password
        },
    }).then(response => {
      if (response && response.data && response.data.errorMessage) {
        this.setState({errors: true});
      } else {
        dispatch({type: usersConstants.LOGIN_SUCCESS, sessionToken: response.data.data.sessionToken});

        if (!sessionStorage.getItem('auth')) {
          let session = {
            sessionToken: response.data.data.sessionToken,
            loggedIn: true
          };

          sessionStorage.setItem('auth', JSON.stringify(session));
        }

        history.push('/dashboard');
      }
    })
  };

  render() {
    return (
      <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <EasyTransition
          path={this.props.location.pathname}
          initialStyle={{opacity: 0}}
          transition="opacity 0.3s ease-in"
          finalStyle={{opacity: 1}}
        >
          <Navigation users={this.props.users} dispatch={this.props.dispatch} history={this.props.history} match={this.props.match} />
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <div className='avatar-login'>
              <Avatar className='avatar'>
                <Security style={{height: '3em', width: '3em'}} />
              </Avatar>
              <h3 style={{color: '#343434'}}>Gérer facilement les commandes</h3>
            </div>
            <form onSubmit={this.handleSubmit} className='formLogin'>
              <FormControl>
                <TextField
                  id="username"
                  value={this.state.username}
                  onChange={this.handleChange('username')}
                  label="Nom d'utilisateur"
                  type='text'
                  className='colorTheme'
                  margin="normal"
                  required
                />
                {this.state.errors && <FormHelperText className='colorTheme' id="username">Cet utilisateur n'existe pas</FormHelperText>}
              </FormControl>
              <FormControl>
                <TextField
                  id="password"
                  value={this.state.password}
                  onChange={this.handleChange('password')}
                  label="Mot de passe"
                  type='password'
                  margin="normal"
                  className={`${this.state.errors ? '' : 'margin'}`}
                  required
                />
                {this.state.errors && <FormHelperText className='colorTheme margin' id="password">Le mot de passe ne correspond pas</FormHelperText>}
              </FormControl>
              <Button type='submit' color="secondary">
                Se connecter
              </Button>
            </form>
          </Grid>
          <Footer />
        </EasyTransition>
      </div>
    )
  }
}

Login.propTypes = {
  history: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users
  };
};

export default connect(mapStateToProps)(Login)