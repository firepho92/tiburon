import React, {Component} from 'react';
import axios from 'axios';

import AppContext from './AppContext';

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: {personal_name: 'Alexandro Aguilar'},
      sales: [],
      deposits: [],
      products: [],
      customers: [],
      alert: {
        show: 0,
        title: '',
        msg: ''
      },
      view: 'Inicio'
    }
    this.server = 'http://192.168.100.4';
  }

  componentDidMount() {
    this._setCustomers();
  }

  _setView = (view) => {
    this.setState({
      view
    })
  }

  _setUser = (user) => {
    this.setState({
      user
    })
  }

  _unsetUser = () => {
    this.setState({
      user: null
    })
  }

  _setCustomers = () => {
    axios.get('http://localhost:8000/customers')
    .then(response => {
      if(response.data.length > 0){
        this.setState({
          customers: response.data
        })
      }
    })
    .catch(error => {
      this._showAlert('No se pudo conectar con el servidor', 'Error');
    });
  }

  _setProducts = () => {
    axios.get('http://localhost:8000/products')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  _showAlert = (msg, title) => {
    this.setState({
      alert: {
        show: 1,
        title: title,
        msg: msg
      }
    });
    setTimeout(() => {
      this._hideAlert(msg, title)
    }, 4000)
  }

  _hideAlert = (msg, title) => {
    this.setState({
      alert: {
        show: 0,
        title: title,
        msg: msg
      }
    });
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        _setCustomers: this._setCustomers,
        _showAlert: this._showAlert,
        _hideAlert: this._hideAlert,
        _setUser: this._setUser,
        _unsetUser: this._unsetUser,
        _setView: this._setView
      }}>
          {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;