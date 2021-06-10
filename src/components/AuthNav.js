import styles from './AppBar.module.css';
const { NavLink } = require('react-router-dom');

const AuthNav = () => (
  <div className={styles.userNav}>
    <NavLink className={styles.register} to="/register" exact>
      Registration
    </NavLink>
    <NavLink to="/login" exact>
      Login
    </NavLink>
  </div>
);

export default AuthNav;
