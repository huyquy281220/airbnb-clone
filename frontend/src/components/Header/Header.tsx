import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";

import Images from "../../assets/img";

function Header() {
    console.log(Images);
    return (
        <header className="flex justify-between items-center py-5 border-b-[1px] border-b-[#ccc]">
            <Link to="/">
                <img src={Images.logo} alt="logo" />
            </Link>
            <div className="flex">
                <Link to="" className="p-[12px] rounded-[999px] hover:bg-[rgb(247,247,247)]">
                    Become a host
                </Link>
                <button className="w-[48px] p-[12px] rounded-[50%] hover:bg-[rgb(247,247,247)]">
                    <FontAwesomeIcon icon={faGlobe} />
                </button>
                <button className="flex items-center px-[12px] py-[5px] rounded-[999px] border-solid border-[1px] border-[#DDDDDD] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
                    <FontAwesomeIcon icon={faBars} className="mr-2" />
                    <img src={Images.avatar} alt="avatar" className="w-[30px] h-[30px]" />
                </button>
            </div>
        </header>
    );
}

export default Header;
