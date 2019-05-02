import React, {Component} from 'react';
//import axios from 'axios';

import AppContext from './AppContext';

class ContextProvider extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      sales: [],
      deposits: [],
      products: [],
      customers: [],
      alert: {
        visible: false,
        msg: ''
      }
    }
    this.server = 'http://192.168.100.4';
  }

  _setUser = (user) => {
    this.setState({
      user
    })
  }

  _showAlert = (msg) => {
    this.setState({
      alert: {
        visible: true,
        msg: msg
      }
    });
  }

  _hideAlert = () => {
    this.setState({
      alert: {
        visible: false,
        msg: ''
      }
    });
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state,
        showAlert: this._showAlert,
        hideAlert: this._hideAlert
      }}>
          {this.props.children}
      </AppContext.Provider>
    );
  }
}

export default ContextProvider;