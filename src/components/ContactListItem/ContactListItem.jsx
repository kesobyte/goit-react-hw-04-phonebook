import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';
// For Class Component use
// import { Component } from 'react';

export const ContactListItem = ({ filteredContact, deleteContact }) => {
  // Handle Delete
  const handleDelete = () => {
    deleteContact(filteredContact.id);
  };

  return (
    <>
      <li className={css.list_item}>
        <p>{filteredContact.name}:</p>
        <p>{filteredContact.number}</p>
        <button className={css.deleteBtn} onClick={handleDelete}>
          Delete
        </button>
      </li>
    </>
  );
};

ContactListItem.propTypes = {
  filteredContact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

//////////////////////////////////////////////////////////////////////////////////////////////////

// Try componentWillUnmount()
// This is usually use for clean-up. i.e timers
// Converted to Class Component

// export class ContactListItem extends Component {
//   static propTypes = {
//     filteredContact: PropTypes.object.isRequired,
//     deleteContact: PropTypes.func.isRequired,
//   };

//   //This will be called just before the element will be removed in the DOM
// componentWillUnmount() {
//   console.log('componentWillUnmount()')
// }

//   // Handle Delete
//   handleDelete = () => {
//     const { filteredContact, deleteContact } = this.props;
//     deleteContact(filteredContact.id);
//   };

//   render() {
//     const { filteredContact } = this.props;

//     return (
//       <li className={css.list_item}>
//         <p>{filteredContact.name}:</p>
//         <p>{filteredContact.number}</p>
//         <button className={css.deleteBtn} onClick={this.handleDelete}>
//           Delete
//         </button>
//       </li>
//     );
//   }
// }
