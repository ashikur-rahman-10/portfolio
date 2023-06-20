import React from "react";
import { FaBars } from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <div className="drawer drawer-mobile">
                <input
                    id="my-drawer-2"
                    type="checkbox"
                    className="drawer-toggle"
                />
                <div className="bg-[#040B14] bg-opacity-75 z-10 w-full h-[60px] absolute lg:hidden">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-button text-xl border w-fit m-[12px] text-white p-2 rounded-xl absolute lg:hidden"
                    >
                        <FaBars></FaBars>
                    </label>
                </div>
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label
                        htmlFor="my-drawer-2"
                        className="drawer-overlay"
                    ></label>
                    <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                        {/* Sidebar content here */}
                        <li>
                            <a>Sidebar Item 1</a>
                        </li>
                        <li>
                            <a>Sidebar Item 2</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Main;
