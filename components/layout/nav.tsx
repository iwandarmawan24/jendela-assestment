import NavMenu from "./nav-menu";
const Nav = () => {
  return (
    <div className="flex flex-row justify-between items-center shadow-md px-4 py-4">
      <div className="flex flex-row gap-2">
        <p className="text-orange-500">&#x25B2;</p>
        <p className="font-bold text-sky-600">MyBrand</p>
      </div>
      <NavMenu />
    </div>
  );
};

export default Nav;
