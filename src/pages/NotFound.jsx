import NavLinks from "../components/NavLinks";

function NotFound() {
  return (
      <div className="flex items-center justify-center h-screen flex-col gap-5">
      <h1 className="text-6xl font-bold text-red-800">404</h1>
      <p className="text-3xl">Afsus bunday sahifa mavjud emas</p>
      <button className="btn btn-outline btn-primary">
        <NavLinks to={"/"} className={"text-[#000000]"}>
          Bosh sahifaga qaytish
        </NavLinks>
      </button>
    </div>
  )
}

export default NotFound;
