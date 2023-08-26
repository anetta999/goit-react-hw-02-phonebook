export const ContactFilter = ({ filter, onfilterContactsByName }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={filter}
        onChange={evt => {
          onfilterContactsByName(evt.target.value);
        }}
      />
    </>
  );
};
