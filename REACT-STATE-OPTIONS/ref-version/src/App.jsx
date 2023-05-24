import { useState } from "react";

function App() {
  const [user, setUser] = useState({
    name: "Daniel",
    profession: "Developer",
    address: {
      city: "Bogotá",
    },
  });

  const onChangeName = (e) => {
    const newUser = {
      ...user,
      name: e.target.value,
    };
    setUser(newUser);
  };

  const onChangeCity = (e) => {
    const newUser = {
      ...user,
      address: {
        ...user.address,
        city: e.target.value,
      },
    };
    setUser(newUser);
  };

  return (
    <>
      <div>
        <input type="text" value={user.name} onChange={onChangeName} />
        <input type="text" value={user.address.city} onChange={onChangeCity} />
        <div>{user.name}</div>
        <div>{user.profession}</div>
        <div>{user.address.city}</div>
      </div>
    </>
  );
}

export default App;
