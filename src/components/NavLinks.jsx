import { NavLink } from "react-router-dom";

function NavLink() {
  return (
    <nav>
      <ul>
        <li>
          <img
            src="https://kun.uz/assets/9daff39f/img/icons/logo-light.svg"
            alt=""
          />
        </li>
        <li>
          <NavLink to={"/"}>O'zbekiston</NavLink>
        </li>
        <li>
          <NavLink to={"/Jahon"}>Jahon</NavLink>
        </li>
        <li>
          <NavLink to={"/Iqtisodiyot"}>Iqtisodiyot</NavLink>
        </li>
        <li>
          <NavLink to={"/Jamiyat"}>Jamiyat</NavLink>
        </li>
        <li>
          <NavLink to={"/Sport"}>Sport</NavLink>
        </li>
        <li>
          <NavLink to={"/Fan-texnika"}>Fan-texnika</NavLink>
        </li>
        <li>
          <NavLink to={"/Nuqtayi-nazar"}>Nuqtayi-nazar</NavLink>
        </li>
        <li>
          <NavLink to={"/Audio"}>Audio</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavLink;
