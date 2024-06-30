import { Component } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  // PropTypes for Class Component
  static propTypes = {
    addContact: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  };

  //Initial State
  state = {
    name: '',
    number: '',
  };

  handleNameChange = e => {
    this.setState({
      //Getting the value property using JS
      name: e.target.value,
    });
    // Checking input
    // console.log(this.state.name);
  };

  handleNumberChange = e => {
    this.setState({
      number: e.target.value,
    });
  };

  handleSubmit = e => {
    // Prevent the page to refresh upon submit
    e.preventDefault();
    // Get the access to state and desctructure it
    const { name, number } = this.state;
    // Get the access to props
    const { addContact, contacts } = this.props;
    // If name and number is empty it will not submit
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    // If existing contact exist it will not submit
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      alert(`${name} is already in contacts.`);
      return;
    }
    // Add Contact
    addContact({
      id: nanoid(),
      name: name.trim(),
      number: number.trim(),
    });
    // Reset form
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    // Destructure state
    const { name, number } = this.state;

    return (
      <>
        <form className={css.form_container} onSubmit={this.handleSubmit}>
          <label>
            <p>Name</p>
            <input
              className={css.input}
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan."
              required
              // Should always be paired (value and onChange)
              value={name}
              onChange={this.handleNameChange}
            />
          </label>

          <label>
            <p>Number</p>
            <input
              className={css.input}
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              // Should always be paired (value and onChange)
              value={number}
              onChange={this.handleNumberChange}
            />
          </label>

          <button className={css.submitBtn} type="submit">
            Add Contact
          </button>
        </form>
      </>
    );
  }
}
