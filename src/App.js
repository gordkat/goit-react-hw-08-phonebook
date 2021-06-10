import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
import AppBar from './components/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView'));

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {
    return (
      <>
        <AppBar />
        <Suspense
          fallback={
            <Loader
              type="Circles"
              color="#b2ee8e"
              height={50}
              width={50}
              timeout={3000}
              className="Loader"
            />
          }
        >
          <Switch>
            <PublicRoute exact path="/" comp={HomeView} />
            <PublicRoute path="/register" restricted comp={RegisterView} />
            <PublicRoute path="/login" restricted comp={LoginView} />
            <PrivateRoute
              path="/contacts"
              comp={ContactsView}
              redirectTo="/login"
            />
          </Switch>
        </Suspense>
      </>
    );
  }
}
const mapDispatchToProps = { onGetCurrentUser: authOperations.getCurrentUser };

export default connect(null, mapDispatchToProps)(App);
