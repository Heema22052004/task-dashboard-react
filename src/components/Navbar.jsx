function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar">
      <h2>Task Dashboard</h2>

      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
      </button>
    </nav>
  );
}

export default Navbar;