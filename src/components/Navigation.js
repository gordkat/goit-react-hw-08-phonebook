import { connect } from 'react-redux';
import { authSelectors } from '../redux/auth';
import styles from './AppBar.module.css';
const { NavLink } = require('react-router-dom');

const Navigation = ({ isAuthenticated }) => (
  <nav className={styles.navigation}>
    <NavLink to="/" exact className={styles.home}>
      Home
    </NavLink>
    {isAuthenticated && (
      <NavLink to="/contacts" exact>
        Contacts
      </NavLink>
    )}
  </nav>
);
const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});
export default connect(mapStateToProps)(Navigation);
