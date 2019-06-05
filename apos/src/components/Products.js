import React, {forwardRef} from 'react';
import AppContext from '../context/AppContext';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';
import pink from '@material-ui/core/colors/pink';
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from '@material-ui/core/colors/indigo';
import blue from '@material-ui/core/colors/blue';
import cyan from '@material-ui/core/colors/cyan';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import amber from '@material-ui/core/colors/amber';
import orange from '@material-ui/core/colors/orange';
import deepOrange from '@material-ui/core/colors/green';
import brown from '@material-ui/core/colors/brown';
import grey from '@material-ui/core/colors/grey';
import blueGrey from '@material-ui/core/colors/blueGrey';
import './Customers.css';
import posed, {PoseGroup} from 'react-pose'


const colors = [
  purple,
  red,
  pink,
  deepPurple,
  indigo,
  blue,
  cyan,
  teal,
  green,
  amber,
  orange,
  deepOrange,
  brown,
  grey,
  blueGrey
]

const Card = forwardRef((props, ref) => (
  <div ref={ref} onClick={() => props._handleClick(props.customer)} className="Card" i={props.i}>
    <div className="CardMedia">
      <div className="InitialsAvatar" style={{backgroundColor: props._getColor()[500], color: '#fff'}}>
        {props._getInitials(props.customer.customer_name)}
      </div>
    </div>
    <div className="CardContent">
      <div className="CardDescriptionField">Cliente</div>
      <div>{props.customer.customer_name}</div>
      <div className="CardDescriptionField">Número</div>
      <div>{props.customer.phone}</div>
    </div>
  </div>
));

const PosedCard = posed(Card)({
  enter: { 
    opacity: 1,
    transition: { opacity: { duration: 2000 }}
  },
  exit: { opacity: 0 }
});

class Customers extends React.Component {
  //se debe agregar la tabla que muestre a todos los usuarios
  _handleClick = (customer) => {
    this.props._setView(2);
    this.props._setCustomer(customer);
  }

  _getInitials = (customer_name) => {
    let splitted = customer_name.split(' ');
    let initials = '';
    if(splitted.length > 1)
      initials = splitted[0][0] + splitted[1][0]
    else
      initials = splitted[0][0]
    return initials;
  }

  _getColor = () => {
    let color = Math.floor(Math.random() * 15);
    color = colors[color];
    return color;
  }

  render() {
    return (
      <AppContext.Consumer>
      	{context => (
          <div className="Customers">
            <PoseGroup>
              {context.state.products.map((product, i) => (
                <PosedCard key={i} _setView={this.props._setView} _setCustomer={this.props._setCustomer} customer={customer} _getInitials={this._getInitials} _getColor={this._getColor}_handleClick={this._handleClick} i={i} />
              ))}
              </PoseGroup>
          </div>
      	)}
      </AppContext.Consumer>
    );
  }
}

export default Customers;
