import { ContactListItem } from 'components/ContactListItem/ContactListItem';
export const ContactList = ({ contacts, ondeleteContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          <ContactListItem
            contact={contact}
            ondeleteContact={ondeleteContact}
          />
        </li>
      ))}
    </ul>
  );
};
