import { Component } from 'react';
import { connect } from 'react-redux';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import Loader from 'react-loader-spinner';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import Filter from '../components/Filter';
import { contactsOperations } from '../redux/contacts';
import { contactsSelectors } from '../redux/contacts';

class ContactsView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }
  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        {this.props.isLoadingContacts && (
          <Loader
            type="Circles"
            color="#b2ee8e"
            height={50}
            width={50}
            timeout={3000}
            className="Loader"
          />
        )}
        <ContactList />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingContacts: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsView);
