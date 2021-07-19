import { Link } from "react-router-dom";

//This is a simple navbar which has dynamic buttons for each page
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>VictoryGolfTracker.io</h1>
      <div className="links">
        <Link to="/" style = {{
          fontWeight: 'bold'
        }}>Home</Link>
        <Link to="/Stats" style = {{
          fontWeight: 'bold'
        }}>Stats</Link>
        <Link to="/Tips" style = {{
          fontWeight: 'bold'
        }}>Tips</Link>
        <Link to="/Experts" style = {{
          fontWeight: 'bold'
        }}>Experts</Link>
        <Link to="/Goals" style = {{
          fontWeight: 'bold'
        }}>Goals</Link>
        {/* <Link to="/create" style={{ 
          color: 'black', 
          backgroundColor: '#a0ff69',
          borderRadius: '6px',
          fontWeight: 'bold'
        }}>New Blog</Link> */}
      </div>
    </nav>
  );
}
 
export default Navbar;