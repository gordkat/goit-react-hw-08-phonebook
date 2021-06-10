import { connect } from 'react-redux';
import noFoto from './no-foto.png';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="UserMenu">
    <img src={avatar} alt="user's avatar" width="32" className="User__avatar" />
    <span className="User__greating">Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  avatar: noFoto,
  name: authSelectors.getUserName(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
