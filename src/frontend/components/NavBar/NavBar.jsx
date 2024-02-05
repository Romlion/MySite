import "./NavBar.css";

function NavBar() {
   return (
    <nav className="nav">
        <a href="#" className="brand">Mon Site</a>
        <ul className="link">
            <li className="navLink"><a href="#" className="navLink">Contact</a></li>
        </ul>
    </nav>
    );
}

export default NavBar