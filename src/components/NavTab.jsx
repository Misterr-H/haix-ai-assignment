import {useState} from "react";
import SearchIcon from '@mui/icons-material/Search';

const NavTab = ({tabs, onSearchChange}) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={'flex border-b-2 border-gray-200'}>
            {tabs.map((tab, index) => {
                return (
                    <div
                        key={index}
                        className={`flex p-2 justify-center items-center cursor-pointer  ${activeTab === index ? 'text-gray-700 bg-gray-200 border-2 border-gray-300 rounded-t-lg' : 'text-blue-600 bg-transparent'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </div>
                )
            })}
            <div className={"rounded-full flex items-center ml-auto  md:w-1/3 p-2 h-12 border-2 border-black"}>
                <SearchIcon/>
                <input
                    className="bg-transparent outline-none w-full ml-2"
                    type="search"
                    placeholder="Search"
                    onChange={onSearchChange}
                />
            </div>
        </div>
    )
}

export default NavTab;