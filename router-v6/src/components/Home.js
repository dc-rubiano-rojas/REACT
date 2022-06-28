import { Link } from "react-router-dom";
const userId = 10;

export default function Home() {
  return (
    <div>
      <h1>Application</h1>
      <Link to={`/user/${userId}`}>Usuarios</Link>
    </div>
  );
}
