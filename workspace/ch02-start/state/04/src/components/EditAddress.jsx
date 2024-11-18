export default function EditAddrss({ addressBook, handleAddressChange }) {
  const list = addressBook.map((address) => {
    return (
      <div key={address.id}>
        <label htmlFor={address.id}>{address.name}</label>
        <input
          type="text"
          id={address.id}
          name={address.name}
          value={address.value}
          onChange={handleAddressChange}
        />
        <br />
      </div>
    );
  });
  return list;
}
