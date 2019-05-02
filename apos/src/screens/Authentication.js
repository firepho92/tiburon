import React from 'react';
import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import AppContext from '../context/AppContext';
import axios from 'axios';
import logo from '../assets/logo.png'
import './Authentication.css';

class Authentication extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: '',
			password: ''
		}
	}

	_onChangeUser = (e) => {
		this.setState({
			user: e.target.value
		});
	}

	_onChangePassword = (e) => {
		this.setState({
			password: e.target.value
		});
	}

	_onSubmit = (e, _setUser, _showAlert) => {
		e.preventDefault();
		axios.post('direccion', {user: this.state.user, password: this.state.password})
		.then(response => {

		})
		.catch(error => {
			
		});
	}

  render() {
    return (
      <AppContext.Consumer>
      {context => (
				<div className="authentication">
	      	<div className="authWrapper">
						
						<img width="200" src={logo} alt="Tiburón"/>

						<form onSubmit={(e) => this._onSubmit(e, context._setUser, context._showAlert)}>
							<TextField
								className="input"
			          label="Usuario"
			          value={this.state.user}
			          onChange={this._onChangeUser}
			          styles={{ fieldGroup: { width: 300 } }}
			        />

			        <TextField
			        	className="input"
			        	type="password"
			          label="Contraseña"
			          value={this.state.password}
			          onChange={this._onChangePassword}
			          styles={{ fieldGroup: { width: 300 } }}
			        />
							
							<br/>

							<PrimaryButton
								className="input"
		            disabled={false}
		            text="Entrar"
		            type="submit"
		            allowDisabledFocus={true}
		          />
						</form>

	      	</div>
	      </div>
      )}
      </AppContext.Consumer>
    );
  }
  
}

export default Authentication;
