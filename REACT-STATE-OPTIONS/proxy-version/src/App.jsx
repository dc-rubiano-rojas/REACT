import { useState, useRef } from "react";

function useProxy(obj) {
  const [, setDummy] = useState(0);
  const proxyRef =  useRef(new Proxy(obj, {
    get() {
      return Reflect.get(...arguments);
    },
    set() {
      Reflect.set(...arguments);
      setDummy((v) => v + 1);
      return true;
    },
  }));
  return proxyRef.current
}

function App() {
  const user = useProxy({
    name: "Daniel",
    profession: "Developer",
    address: {
      city: "Bogotá"
    }
  });

  const onChangeName = (e) => {
    user.name = e.target.value;
  };

  return (
    <>
      <div>
        <input type="text" value={user.name} onChange={onChangeName} />
        <div>{user.name}</div>
        <div>{user.profession}</div>
        <div>{user.address.city}</div>
      </div>
    </>
  );
}

export default App;
