import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations } from '../redux/auth';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onLogin(this.state);
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit} className="Form">
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
          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

export default connect(null, mapDispatchToProps)(LoginView);
