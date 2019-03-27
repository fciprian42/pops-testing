import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import EasyTransition from 'react-easy-transition';
import Pagination from "material-ui-flat-pagination";
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Grid, Paper, Avatar, ListItemText, ListItem, List, Select, MenuItem, FormControl, InputLabel, Divider } from '@material-ui/core';
import WorkIcon from '@material-ui/icons/Work';
import Done from '@material-ui/icons/Done';
import Remove from '@material-ui/icons/Remove';
import axios from 'axios';

import { ordersConstants } from '../../constants/odersConstants';

import './Dashboard.css';

// Components
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';

class Dashboard extends PureComponent {
  state = {
    limit: 5,
    page: 1,
    offset: 0,
    totalCommands: 0,
    lastIdOrder: '',
    orderSelected: [],
    showOrders: false,
    showInfos: false,
    fieldCategory: '',
    users: {
      loggedIn: false,
      token: 0
    }
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const { users, orders } = nextProps;

    if (users && orders) {
      return {
        users,
        orders
      }
    }

    return {
      prevState
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const { users } = this.state;

    if (!users.loggedIn) {
      this.props.history.push('/login');
    } else {
      // Get orders
      axios.get('https://4i48oxh8hb.execute-api.us-east-1.amazonaws.com/dev/orders', {headers: {'sessionToken': this.state.users.sessionToken}, params: {
          scanIndexForward: 0
        }})
        .then(res => {
          if (res && res.data) {
            const orders = res.data.data;
            let types = [];
            let ordersTab = [];

            orders.map((order, index) => {
              if (!types.includes(order.orderStatus)) {
                types.push(order.orderStatus);
              }

              if (index < 5) {
                ordersTab.push(order);
              }
            });

            if (types.length > 0 || ordersTab.length > 0) {
              this.setState({
                ...this.state,
                totalCommands: orders.length,
                lastIdOrder: ordersTab[ordersTab.length - 1].orderId,
                resetId: ordersTab[0].orderId,
              });

              dispatch({type: ordersConstants.GET_ORDERS, types: types, orders: ordersTab})
            }
          }
        });
    }
  }

  handleRequest = (params) => {
    const { dispatch } = this.props;

    axios.get('https://4i48oxh8hb.execute-api.us-east-1.amazonaws.com/dev/orders', {headers: {'sessionToken': this.state.users.sessionToken}, params})
      .then(res => {
        if (res && res.data) {
            const orders = res.data.data;
            let types = [];

            orders.map((order,) => {
              if (!types.includes(order.orderStatus)) {
                types.push(order.orderStatus);
              }
            });

            this.setState({
              ...this.state,
              lastIdOrder: orders[orders.length - 1].orderId
            });
            dispatch({type: ordersConstants.GET_ORDERS, types: types, orders: orders})
        }
      });
  };

  handleClick = (e, offset) => {
    const page = parseInt(e.target.innerText, 10);

    this.setState({
      offset,
      page
    });

    this.handleRequest({
      offsetOrderId: page > 1 ? this.state.lastIdOrder : this.state.resetId,
      limit: 5,
      scanIndexForward: 0
    });
  };

  handleState = name => {
    this.setState({
      [name]: !this.state[name],
      showInfos: false
    })
  };

  showOrder = (key) => {
    const order = this.state.orders.orders[key];

    this.setState({
      showOrders: false,
      showInfos: true,
      orderSelected: order
    })
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  checkStatus = (status) => {
    let statusUpdate = '';

    switch (status) {
      case 'paid':
        statusUpdate = "n'a pas encore été livré.";
        break;
      case 'delivered':
        statusUpdate = "a été livré.";
        break;
      default:
        break;
    }

    return statusUpdate;
  };

  render() {
    const orderSelected = this.state.orderSelected;

    return (
      <div style={{width: '100%'}}>
        <EasyTransition
          path={this.props.location.pathname}
          initialStyle={{opacity: 0}}
          transition="opacity 0.3s ease-in"
          finalStyle={{opacity: 1}}
        >
          <Navigation users={this.props.users} dispatch={this.props.dispatch} history={this.props.history} match={this.props.match} />
          <Grid className='container'>
            <Grid item xs={3} className='margin-grid'>
              <Paper>
                <List className='list'>
                  <ListItem button disabled={this.state.orders.orders.length <= 0} onClick={() => {this.handleState('showOrders')}}>
                    <Avatar>
                      <WorkIcon />
                    </Avatar>
                    <ListItemText primary="Commandes" secondary={`Plus de ${this.state.totalCommands} commandes`} />
                  </ListItem>
                </List>
              </Paper>
            </Grid>
            {this.state.showOrders && <Grid item xs={9} className='margin-grid'>
              <Paper>
                <div className='settings'>
                  <div></div>
                  <div>
                    <form autoComplete="off">
                      <FormControl style={{minWidth: 250}}>
                        <InputLabel htmlFor="demo-controlled-open-select">Catégories</InputLabel>
                        <Select
                          value={this.state.fieldCategory}
                          onChange={this.handleChange('fieldCategory')}
                        >
                          <MenuItem value="">
                            <em>Toutes catégories</em>
                          </MenuItem>
                          {this.state.orders.types && this.state.orders.types.length > 0 && this.state.orders.types.map((type, index) => {
                            return (
                              <MenuItem value={type} key={index}>{type}</MenuItem>
                            );
                          })}
                        </Select>
                      </FormControl>
                    </form>
                  </div>
                </div>
                <div className="orders">
                  {this.state.orders.orders && this.state.orders.orders.length > 0 && this.state.orders.orders.map((order, index) => {
                    const timestamp = order.timestamps.paid;
                    const date = moment(new Date(timestamp*1000)).format('MMMM DD, YYYY');

                    return (
                      <List className='orders-list' key={index}>
                        <ListItem button onClick={() => {this.showOrder(index)}}>
                          <Avatar className='typeOrder'>
                            <Done  />
                          </Avatar>
                          <ListItemText primary={order.address.firstname + ' ' + order.address.lastname} secondary={date} />
                          <div className='infosOrder'>
                            <span>{order.email}</span>
                            <span style={{color: '#ff1744'}}>{order.selections[0].sources[0].quantity + ' ' + order.selections[0].sources[0].type}</span>
                            <span>{order.priceFinal} {order.currency}</span>
                          </div>
                        </ListItem>
                        {index < this.state.orders.orders.length - 1 && <Divider variant="inset" component="li" />}
                      </List>
                    );
                  })}
                </div>
                <div className='pagination'>
                  <Pagination
                    limit={5}
                    offset={this.state.offset}
                    total={this.state.totalCommands}
                    onClick={(e, offset) => this.handleClick(e, offset)}
                  />
                </div>
              </Paper>
            </Grid>}
            {this.state.showInfos && <Grid item xs={9} className='margin-grid'>
              <Paper>
                <div className='orderInfos'>
                  <div className='headerInfos'>
                    <div>
                      <Avatar className={`${orderSelected.orderStatus === 'paid' ? 'typeOrder' : 'notPaid'}`}>
                        {orderSelected.orderStatus === 'paid' ? <Done /> : <Remove />}
                      </Avatar>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', textAlign: 'center'}}>
                      {orderSelected.address.firstname + ' ' + orderSelected.address.lastname}
                      <small style={{fontWeight: 'bold', marginTop: 5}}>
                        {orderSelected.orderId}
                      </small>
                    </div>
                    <div>
                      {moment(new Date(orderSelected.paidTime*1000)).format('MMMM DD, YYYY')}
                    </div>
                  </div>
                  <div className='bodyInfos'>
                    <h3>Informations complémentaire sur le client</h3>
                    <div className='userInfos'>
                      <div className='center'>
                        <Avatar className='avatarUser'>
                          {orderSelected.address.firstname.charAt(0).toUpperCase()}
                        </Avatar>
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                          <span>
                            {orderSelected.address.firstname}
                          </span>
                          <span>
                            {orderSelected.address.lastname}
                          </span>
                          <small>
                            #{orderSelected.userId}
                          </small>
                        </div>
                      </div>
                      <div></div>
                      <div style={{textAlign: 'right'}}>
                        {orderSelected.email} <br/>
                        {orderSelected.address.addressCountry}
                      </div>
                    </div>
                    <h3>Informations complémentaire sur la commande</h3>
                    <div>
                      <Table>
                        <TableHead>
                          <TableRow>
                            <TableCell align='center'>
                              Id
                            </TableCell>
                            <TableCell align='center'>
                              Type
                            </TableCell>
                            <TableCell align='center'>
                              Quantité
                            </TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {orderSelected.selections[0].sources.map((product, index) => {
                            return (
                              <TableRow key={index}>
                                <TableCell align='center'>
                                  {orderSelected.selections[0].productId}
                                </TableCell>
                                <TableCell align='center'>
                                  {product.type}
                                </TableCell>
                                <TableCell align='center'>
                                  {product.quantity}
                                </TableCell>
                              </TableRow>
                            )
                          })}
                        </TableBody>
                      </Table>
                      <div className='price'>
                        <span>Produit(s)</span>
                        <span>{orderSelected.priceProducts} {orderSelected.currency}</span>
                      </div>
                      <div className='price' style={{borderBottom: '1px solid #ccc'}}>
                        <span>Livraison</span>
                        <span>{orderSelected.priceShipping} {orderSelected.currency}</span>
                      </div>

                      <div className='price' style={{backgroundColor: '#efefef'}}>
                        <p>Total</p>
                        <p>{orderSelected.priceFinal} {orderSelected.currency}</p>
                      </div>
                    </div>
                    <h3>Informations complémentaire sur la livraison</h3>
                    <div className='infosDeliv'>
                      <p>Le colis <strong>#{orderSelected.orderId}</strong> à destination de {orderSelected.address.addressCity} en {orderSelected.address.addressCountry} {this.checkStatus(orderSelected.orderStatus)}</p>
                      <h4>État: {orderSelected.orderStatus}</h4>
                    </div>
                  </div>
                </div>
              </Paper>
            </Grid>}
          </Grid>
          <Footer />
        </EasyTransition>
      </div>
    )
  }
}

Dashboard.propTypes = {
  history: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    users: state.users,
    orders: state.orders
  };
};

export default connect(mapStateToProps)(Dashboard);