import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBars } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";

import Images from "../../assets/img";

const authItems = ["Log in", "Sign up"];
const hostItems = ["Host your home", "Host an experience", "Help"];

function Header() {

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
                <Tippy
                    interactive
                    trigger="click"
                    placement="bottom-end"
                    render={(attrs) => (
                        <div className="w-[240px] bg-white rounded-[12px] shadow-[0_2px_16px_rgba(0,0,0,0.12)]" tabIndex={-1} {...attrs}>
                            <div className="py-2">
                                {authItems.map((item, index) => {
                                    return (
                                        <button key={index} className="block w-full text-left p-[12px] bg-transparent hover:bg-[#F7F7F7]">
                                            {index === 0 ? <span className="font-bold">{item}</span> : <span>{item}</span>}
                                        </button>
                                    );
                                })}
                            </div>
                            <hr className="h-[2px] bg-[#DDDDDD]" />
                            <div className="py-2">
                                {hostItems.map((item, index) => {
                                    return (
                                        <Link to="" key={index} className="block p-[12px] bg-transparent hover:bg-[#F7F7F7]">
                                            {item}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                >
                    <button className="flex items-center px-[12px] rounded-[999px] border-solid border-[1px] border-[#DDDDDD] hover:shadow-[0_2px_4px_rgba(0,0,0,0.18)]">
                        <FontAwesomeIcon icon={faBars} className="mr-2" />
                        <img src={Images.avatar} alt="avatar" className="w-[30px] h-[30px]" />
                    </button>
                </Tippy>
            </div>
        </header>
    );
}

export default Header;
