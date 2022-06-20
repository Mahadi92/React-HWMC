import { useState } from "react";
import {
  Lucide,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownContent,
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
} from "@/base-components";
import { faker as $f } from "@/utils";
import * as $_ from "lodash";
import classnames from "classnames";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main";
import Tracker from "../Tracker";

function Main(props) {
  const [searchDropdown, setSearchDropdown] = useState(false);
  const showSearchDropdown = () => {
    setSearchDropdown(true);
  };
  const hideSearchDropdown = () => {
    setSearchDropdown(false);
  };

  return (
    <>
    
      {/* BEGIN: Top Bar */}
      <div className="top-bar sticky top-16 md:top-0">
         {/* BEGIN: Search */}
         <div className="intro-x relative mr-3 sm:mr-6">
          <div className="search hidden sm:block">
            <input
              type="text"
              className="search__input form-control border-transparent"
              placeholder="Search Coming Soon..."
              onFocus={showSearchDropdown}
              onBlur={hideSearchDropdown}
            />
            <Lucide
              icon="Search"
              className="search__icon dark:text-slate-500"
            />
          </div>
          <a className="notification sm:hidden" href="">
            <Lucide
              icon="Search"
              className="notification__icon dark:text-slate-500"
            />
          </a>
          <div
            className={classnames({
              "search-result": true,
              show: searchDropdown,
            })}
          >         
          </div>
        </div>
        {/* END: Search  */}
        {/* BEGIN: MainMenu */}
        <nav
          aria-label="mainmenu"
          className="w-4/12 xl:w-2/12 -intro-x mr-auto hidden sm:flex justify-center items-center"
        >     
          <div className="top-menu__title">   
            <a href="#" className="text-xs md:text-sm">Overview Dashboard</a>
          </div>
        </nav>
        {/* END: MainMenu */}
        <div className="w-7/12 xl:w-9/12 h-full px-4 pt-3">
          <Tracker />
        </div>
        <div className=" w-1/12 flex justify-end">
          <DarkModeSwitcher />
        </div>
      </div>
      {/* END: Top Bar */}
    </>
  );
}

export default Main;
