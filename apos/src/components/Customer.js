import React from 'react';
import { ActionButton } from 'office-ui-fabric-react/lib/Button';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Icon } from 'office-ui-fabric-react/lib/Icon';
import AppContext from '../context/AppContext';
import axios from 'axios';
var QRCode = require('qrcode.react');

class Customer extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			edit: false,
			customer_id: '',
			owner: '',
			customer_name: '',
			phone: '',
			street: '',
			number: '',
			postal_code: 0,
			district: '',
			county: '',
			state: '',
			email: '',
			RFC: '',
			business_name: '',
			latitude: 0,
			longitude: 0,
			type: '',
			notes: '',
			created: '',
			updated: '',
			qr: 0,
			status: 0
		}
	}

	componentDidMount() {
		this.setState({
			customer_id: this.props.customer.customer_id,
			owner: this.props.customer.owner,
			customer_name: this.props.customer.customer_name,
			phone: this.props.customer.phone,
			street: this.props.customer.street,
			number: this.props.customer.number,
			postal_code: this.props.customer.postal_code,
			district: this.props.customer.district,
			county: this.props.customer.county,
			state: this.props.customer.state,
			email: this.props.customer.email,
			RFC: this.props.customer.RFC,
			business_name: this.props.customer.business_name,
			latitude: this.props.customer.latitude,
			longitude: this.props.customer.longitude,
			type: this.props.customer.type,
			notes: this.props.customer.notes,
			created: this.props.customer.created,
			updated: new Date(),
			qr: this.props.customer.qr,
			status: this.props.customer.status
		})
	}

	_handleClick = () => {
		this.setState({
			edit: !this.state.edit
		})
	}

	_onPhoneChange = (e) => {
		this.setState({
			phone: e.target.value
		});
	}

	_onStreetChange = (e) => {
		this.setState({
			street: e.target.value
		});
	}

	_onNumberChange = (e) => {
		this.setState({
			number: e.target.value
		});
	}

	_onPostalCodeChange = (e) => {
		this.setState({
			postal_code: e.target.value
		});
	}

	_onDistrictChange = (e) => {
		this.setState({
			district: e.target.value
		});
	}

	_onCountyChange = (e) => {
		this.setState({
			county: e.target.value
		});
	}

	_onStateChange = (e) => {
		this.setState({
			state: e.target.value
		});
	}

	_onEmailChange = (e) => {
		this.setState({
			email: e.target.value
		});
	}

	_onRFCChange = (e) => {
		this.setState({
			RFC: e.target.value
		});
	}

	_onBusinessChange = (e) => {
		this.setState({
			business_name: e.target.value
		})
	}

	_onNotesChange = (e) => {
		this.setState({
			notes: e.target.value
		});
	}

	_onQRChange = () => {
		if(this.state.qr === 0){
			this.setState({
				qr: 1
			});
		} else {
			this.setState({
				qr: 0
			})
		}
	}

	_onStatusChange = (_setCustomers, _showAlert) => {
		if(this.state.status === 0){
			this.setState({
				status: 1
			}, this._onSubmit(_setCustomers, _showAlert));
		} else {
			this.setState({
				status: 0
			}, this._onSubmit(_setCustomers, _showAlert));
		}
	}

	_onSubmit = (_setCustomers, _showAlert) => {
		axios.put('http://localhost:8000/customers', 
			{
				customer_id: this.state.customer_id,
				owner: this.state.owner,
				customer_name: this.state.customer_name,
				phone: this.state.phone,
				street: this.state.street,
				number: this.state.number,
				postal_code: this.state.postal_code,
				district: this.state.district,
				county: this.state.county,
				state: this.state.state,
				email: this.state.email,
				RFC: this.state.RFC,
				business_name: this.state.business_name,
				latitude: this.state.latitude,
				longitude: this.state.longitude,
				type: this.state.type,
				notes: this.state.notes,
				created: this.state.created,
				updated: this.state.updated,
				qr: this.state.qr,
				status: this.state.status === 0 ? 1 : 0
			})
		.then(response => {
			_setCustomers();
			_showAlert('Cliente actualizado correctamente.', 'Éxito.');
		})
		.catch(error => {
			_showAlert('No se puede conectar con el servidor.', 'Error.')
		});
	}

  render() {
    return (
      <AppContext.Consumer>
      	{context => (
      		<div className="CustomerWrapper">
      			<div className="Customer">
      			  {this.state.qr === 1 ? <QRCode value={this.props.customer.customer_id.toString()} /> : null}
							<div className="CustomerName">
								{this.props.customer.customer_name}
								<Icon iconName="EditContact" className={this.state.edit ? 'EditActive' : 'EditInactive'} onClick={this._handleClick}/>
								{this.state.edit ? <Icon iconName="Save" className="EditActive" onClick={() => this._onSubmit(context._setCustomers, context._showAlert)}/> : null }
							</div>
							<div className="CardDescriptionField">
		      			{this.props.customer.owner}
		      		</div>
		      		<div className="CustomerInformation">
		      			<input type="text" onChange={(e) => this._onPhoneChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.phone} readOnly={this.state.edit ? false : true} />
		      			<input type="text" onChange={(e) => this._onStreetChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.street} readOnly={this.state.edit ? false : true} />
			      		<input type="text" onChange={(e) => this._onNumberChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.number} readOnly={this.state.edit ? false : true} />
			      		<input type="text" onChange={(e) => this._onPostalCodeChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.postal_code} readOnly={this.state.edit ? false : true} />
			      		<input type="text" onChange={(e) => this._onDistrictChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.district} readOnly={this.state.edit ? false : true} />
			      		<input type="text" onChange={(e) => this._onCountyChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.county} readOnly={this.state.edit ? false : true} />
			      		<input type="text" onChange={(e) => this._onStateChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.state} readOnly={this.state.edit ? false : true} />
			      		<input type="text" onChange={(e) => this._onEmailChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.email} readOnly={this.state.edit ? false : true} />
			      		<div>{this.props.customer.type}</div>
			      		{this.state.RFC.length > 0 ? <input type="text" onChange={(e) => this._onRFCChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.RFC} readOnly={this.state.edit ? false : true} /> : null}
			      		{this.state.business_name.length > 0 ? <input type="text" onChange={(e) => this._onBusinessChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.business_name} readOnly={this.state.edit ? false : true} /> : null}
			      		{this.state.notes.length > 0 ? <textarea type="text" onChange={(e) => this._onNotesChange(e)} className="CustomerTextInput" style={this.state.edit ? {cursor: 'text'} : {cursor: 'default'}} value={this.state.notes} readOnly={this.state.edit ? false : true} /> : null}
			      		<div>
									<Toggle
					          defaultChecked={this.props.customer.status === 1 ? true : false}
					          label=""
					          onText="Habilitado"
					          offText="Deshabilitado"
					          onChange={() => this._onStatusChange(context._setCustomers, context._showAlert)}
					        />
			      		</div>
			      		{this.state.qr === 0 ? <PrimaryButton data-automation-id="test" checked={false} text="Generar QR" onClick={this._onQRChange} allowDisabledFocus={true} /> : null}
		      		</div>
	      		</div>
	      		<div className="CustomerStatistics">
	      			aló
	      		</div>
      		</div>
      	)}
      </AppContext.Consumer>
    );
  }
  
}

export default Customer;
