import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import Form from "./components/Form";
import Contacts from "./components/Contacts";
import Filter from "./components/Filter";
import { Wrapper } from "./App.styled";

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    const contactsList = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contactsList);
    if (parsedContacts === null) return setContacts([]);
    setContacts(parsedContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
    // }
  }, [contacts]);

  const handleFormSubmit = ({ name, number }) => {
    const isDouble = checkForDouble(name);
    if (isDouble) return;
    setContacts((state) => [...state, { name, number, id: uuidv4() }]);
  };

  const searchContacts = (query) => {
    const searchQuery = query.trim().toLowerCase();
    const list = contacts;
    const result = list.filter(
      (el) => el.name.toLowerCase().indexOf(searchQuery) > -1
    );

    return result;
  };

  const handleQuery = (data) => {
    if (data.trim() === "") {
      setFilter("");
      setSearchResult([]);
      return;
    }
    setFilter(data);
    const res = searchContacts(data);
    setSearchResult(res);
  };

  const checkForDouble = (newName) => {
    const isDouble = contacts.find((contact) => contact.name === newName);
    if (isDouble) alert(`${newName} is already in contacts`);
    return isDouble;
  };

  const onDeleteBtn = (dataId) => {
    const updatedList = contacts.filter((el) => el.id !== dataId);
    setContacts(updatedList);
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={handleFormSubmit} />

      <h2>Contacts</h2>
      <Filter onChange={handleQuery} />
      <Contacts
        searchResult={searchResult}
        contactsList={contacts}
        btnDelete={onDeleteBtn}
      />
    </Wrapper>
  );
};

export default App;
