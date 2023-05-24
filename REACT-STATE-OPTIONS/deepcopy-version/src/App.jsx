import { useState } from "react";
import { cloneDeep, isEqual } from "lodash";

function useDeepCopy(obj) {
  const [original, setOriginal] = useState(obj);
  return [
    cloneDeep(original),
    (newValue) => {
      if(!isEqual(original, newValue)) {
        setOriginal(newValue)
      }
    }
  ]
}

function App() {
  const [user, setUser] = useDeepCopy({
    name: "Daniel",
    profession: "Developer",
    address: {
      city: "Bogotá",
    },
  });

  const onChangeName = (e) => {
    user.name = e.target.value;
    setUser(user);
  };

  const onChangeCity = (e) => {
    user.address.city = e.target.value;
    setUser(user);
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
