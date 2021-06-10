import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onRegister(this.state);
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <div>
        <h2>Registration</h2>
        <form onSubmit={this.handleSubmit} className="Form">
          <label className="Form__lable">
            Name
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="Form__lable">
            Mail
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            ></input>
          </label>
          <label className="Form__lable">
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            ></input>
          </label>
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = { onRegister: authOperations.register };

export default connect(null, mapDispatchToProps)(RegisterView);
