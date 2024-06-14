import logo from "../../assets/logo.svg";
function Navbar() {
  return (
    <div className="flex items-center justify-between px-[120px] py-3">
      <img src={logo} alt="" />
      <h3 className="font font-bold text-2xl leading-9 text-[##0C0C4F]">
        Galagiochi
      </h3>
      <button className="py-3 rounded-full bg-[#fafafa] font-medium text-base leading-6 text-[#4A4AFF] w-[162px]">
        Get Started
      </button>
    </div>
  );
}

export default Navbar;
