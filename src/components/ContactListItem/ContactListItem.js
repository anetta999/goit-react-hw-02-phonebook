export const ContactListItem = ({ contact, ondeleteContact }) => {
  return (
    <>
      <p>{contact.name}</p>
      <p>{contact.number}</p>
      <button onClick={() => ondeleteContact(contact.id)}>Delete</button>
    </>
  );
};
