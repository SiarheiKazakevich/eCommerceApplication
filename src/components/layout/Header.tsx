import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ padding: "16px", backgroundColor: "#f5f5f5" }}>
      <nav style={{ display: "flex", gap: 16 }}>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </nav>
    </header>
  );
}
