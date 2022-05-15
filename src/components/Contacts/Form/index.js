import { useState } from "react";

export default function Form({ addContact, contacts }) {
  const initialFormValues = { fullname: "", phone_number: "" };
  const [form, setForm] = useState(initialFormValues);

  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    //Form döngüyü eğer form verileri girilmediyse başlamadan sonlandırır!
    if (form.fullname === "" || form.phone_number === "") {
      return;
    }
    addContact([...contacts, form]);
    setForm(initialFormValues);
  };

  return (
    <form>
      <div>
        <input
          name="fullname"
          placeholder="Full Name"
          onChange={onChangeInput}
          value={form.fullname}
        />
      </div>
      <div>
        <input
          name="phone_number"
          placeholder="Phone Number"
          onChange={onChangeInput}
          value={form.phone_number}
        />
      </div>
      <div className="btn">
        <button id="buttons" onClick={onSubmit}>
          Add
        </button>
      </div>
    </form>
  );
}
