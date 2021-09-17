import PropTypes from "prop-types";
import ListElement from "../ListElement";
import { List } from "./Contacts.styled";

const Contacts = ({ contactsList, searchResult, btnDelete }) => {
  const isListEmpty = contactsList.length === 0;
  const isSearchResultEmpty = searchResult.length === 0;
  return (
    <div>
      {isListEmpty && <p>Your contacts List is still empty.</p>}
      <List>
        {isSearchResultEmpty
          ? contactsList.map((contact) => (
              <ListElement
                elData={contact}
                deleteBtn={btnDelete}
                key={contact.id}
              />
            ))
          : searchResult.map((contact) => (
              <ListElement elData={contact} key={contact.id} />
            ))}
      </List>
    </div>
  );
};

Contacts.propTypes = {
  contactsList: PropTypes.arrayOf(
    PropTypes.exact({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  searchResult: PropTypes.array.isRequired,
  btnDelete: PropTypes.func,
};

export default Contacts;
