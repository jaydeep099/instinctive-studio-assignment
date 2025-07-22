export default function Navbar() {
  return (
    <div className="fixed w-full h-[76px] border-b-[1px] flex flex-row items-center justify-between pt-4 pb-3 px-6 ">
      <div className="flex flex-col h-[26px] gap-2">
        <div className="flex flex-row h-[26px] gap-2.5">
          <div className="h-[26px] w-5 relative">
            <div className="h-[21px] w-[21px]">
              <img src="./M.png" />
              <div className="w-[10px] h-[16px] absolute top-[10px] left-[5px]">
                <img src="./small-M.png" />
              </div>
            </div>
          </div>
          <div className="w-[90px] h-[19px]">
            <span className="text-[16px] text-center leading-[120%]">
              MANDLAC
            </span>
            <span className="text-[16px] text-center font-extrabold leading-[120%]">
              X
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-row w-[540px] h-9 gap-4">
        <button className="flex flex-row w-[110px] h-[36px] rounded-[6px] py-2.5 px-3 gap-[6-x]">
            <div className="w-4 h-4">
                <img src="./dashboard.png" alt="dashboard" className="w-3 h-3 top-0.5 left-0.5"/>
            </div>
            <div className="w-12 h-14 text-[#ffffff] font-bold text-[12px] leading-[120%] text-center tracking-[-1%]">
               Dashboard
            </div>
        </button>
        <button></button>
        <button></button>
        <button></button>
        <button></button>
      </div>
      <div></div>
    </div>
  );
}
