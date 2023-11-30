import NavComponente from "./NavComponente";

const Nav = () => {
  return (
    <nav className="  fixed w-full  z-10  top-0 ">
      <div className="flex justify-between  items-center container m-auto ">
        <NavComponente />
      </div>
    </nav>
  );
};

export default Nav;
