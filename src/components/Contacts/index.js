import { useEffect, useState } from "react";
import "./styles.css";
import Form from "./Form";
import List from "./List"; //Burada index.js i otomatik olarak çağırır!

export default function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Alper HG",
      phone_number: "12345"
    },
    {
      fullname: "Memo",
      phone_number: "12231"
    },
    {
      fullname: "Bigo",
      phone_number: "12313215"
    },
    {
      fullname: "Ahmo",
      phone_number: "213213"
    }
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1 align="center">Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}
