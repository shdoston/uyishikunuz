import { NavLink } from "react-router-dom";

function FanTexnika() {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <img
            src="https://kun.uz/assets/9daff39f/img/icons/logo-light.svg"
            alt=""
          />
        </div>
        <div className="navbar-center gap-9 text-black text-base font-bold leading-tight">
          <NavLink to="/" className="hover:text-[#0035a0]">
            O'zbekiston
          </NavLink>
          <NavLink to="/Jahon" className="hover:text-[#0035a0]">
            Jahon
          </NavLink>
          <NavLink to="/Iqtisodiyot" className="hover:text-[#0035a0]">
            Iqtisodiyot
          </NavLink>
          <NavLink to="/Jamiyat" className="hover:text-[#0035a0]">
            Jamiyat
          </NavLink>
          <NavLink to="/Sport" className="hover:text-[#0035a0]">
            Sport
          </NavLink>
          <NavLink to="/FanTexnika" className="hover:text-[#0035a0]">
            Fan Texnika
          </NavLink>
          <NavLink to="/NuqtayiNazar" className="hover:text-[#0035a0]">
            Nuqtayi nazar
          </NavLink>
          <NavLink to="/Audio" className="hover:text-[#0035a0]">
            Audio
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default FanTexnika;
