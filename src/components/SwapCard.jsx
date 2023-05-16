import { RxGear } from "react-icons/rx";
import { AiOutlineArrowDown } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function SwapCard() {
  return (
    <div className="relative">
      {/* ################################ CARD ##################################### */}
      <div className="flex w-full sm:max-w-[422px] flex-col justify-between border border-gray-300 dark:border-gray-300/20 dark:bg-[#0D111C] h-min rounded-xl p-2 gap-3">
        {/* Title config */}
        <div className="flex justify-between items-center p-3">
          <div className="flex items-center gap-4">
            <p className="font-semibold">Swap</p>
            <p className="relative font-semibold text-gray-500 dark:text-[#98a1c0]">
              Buy{" "}
              <span className="text-blue-500 absolute text-2xl -top-1 pl-1">
                •
              </span>
            </p>
          </div>
          <span className="text-2xl text-gray-500 dark:text-[#98a1c0]">
            <RxGear />
          </span>
        </div>

        {/* Input config */}
        <div className="flex flex-col gap-1 relative">
          <div className="flex justify-between w-full  h-[96px] rounded-xl p-4 bg-gray-300 dark:bg-[#131A2A] dark:text-[#98a1c0] ">
            <input
              type="number"
              min={0}
              placeholder="0"
              className="bg-transparent text-[2em] h-[44px] w-[70%] outline-none appearance-none"
            />
            <button className="flex justify-between items-center px-1 sm:px-2 w-[30%] min-w-[110px] outline-none appearance-none rounded-full font-bold text-white bg-[#5d6785]/40 dark:bg-[#5d6785] cursor-default h-[32px]">
              <div className="h-[24px] w-[24px] bg-[#5285F6] rounded-full">
                <img src="" alt="" />
              </div>
              <p className="text-sm md:text-lg">ETH</p>
              <span className="text-md md:text-lg text-white">
                <IoIosArrowDown />
              </span>
            </button>
          </div>
          <div className="flex w-full  h-[96px] rounded-xl p-4 bg-gray-300 dark:bg-[#131A2A] dark:text-[#98a1c0] ">
            <input
              type="number"
              min={0}
              placeholder="0"
              className="bg-transparent text-[2em] h-[44px] w-[60%] outline-none"
            />
            <button className="flex justify-between px-2 w-[40%] min-w-[144px] items-center outline-none appearance-none rounded-full font-bold text-white bg-[#5285F6] cursor-default text-lg h-[32px]">
              <p className="text-sm md:text-lg whitespace-nowrap">
                Select token
              </p>
              <span className="text-lg text-white">
                <IoIosArrowDown />
              </span>
            </button>
          </div>

          <div className="absolute top-[50%] left-[50%] flex justify-center items-center h-[36px] w-[36px] translate-x-[-50%] translate-y-[-50%] bg-gray-200 dark:bg-[#252D42] p-2 rounded-xl border-[4px] border-white dark:border-[#0D111C]">
            <span className="text-[16px] text-gray-500 dark:text-[#606576]">
              <AiOutlineArrowDown />
            </span>
          </div>
        </div>

        {/* Button config */}
        <div className="">
          <button className="w-full h-[56px] rounded-xl  bg-[#4c82fb]/20 text-[#4c82fb]  font-bold cursor-default">
            Connet Wallet
          </button>
        </div>
      </div>

      {/* OVER MESSAGE */}
      <div className="flex justify-center items-center absolute top-0 left-0 w-full h-[342px] bg-white/80 dark:bg-[#0D111C]/80  border border-gray-300 dark:border-gray-300/20 rounded-xl select-none">
        <p className="text-black/80 dark:text-white/40  text-lg">
          Temporarily disabled by update
        </p>
      </div>
    </div>
  );
}

export default SwapCard;
