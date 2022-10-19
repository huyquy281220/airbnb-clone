import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function ListNavbarFirst() {
    return (
        <div className="flex justify-between w-[352px] h-[50px] px-[16px] rounded-[99px] border-solid border-[1px] border-[#DDDDDD] shadow-[0_1px_2px_rgb(0,0,0,0.08),0_4px_12px_rgb(0,0,0,0.05)] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)] leading-[48px]">
            <button className="px-[12px] border-r-[1px] border-r-[#DDDDDD] font-[600] text-[14px]">Anywhere</button>
            <button className="px-[12px] border-r-[1px] border-r-[#DDDDDD] font-[600] text-[14px]">Any week</button>
            <div className="flex items-center">
                <button className="mr-3 text-[#717171] text-[14px]">Add guests</button>
                <button className="flex items-center justify-center w-[32px] h-[32px] rounded-[50%] bg-[#FF385C]">
                    <FontAwesomeIcon icon={faSearch} className="w-[12px] h-[12px] text-white" />
                </button>
            </div>
        </div>
    );
}

export default ListNavbarFirst;
