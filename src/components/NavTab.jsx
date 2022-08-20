import {useState} from "react";

const NavTab = ({tabs}) => {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <div className={'flex border-b-2 border-gray-200'}>
            {tabs.map((tab, index) => {
                return (
                    <div
                        key={index}
                        className={`flex p-2 justify-center items-center  ${activeTab === index ? 'text-gray-700 bg-gray-200 border-2 border-gray-300 rounded-t-lg' : 'text-blue-600 bg-transparent'}`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab}
                    </div>
                )
            })}
        </div>
    )
}

export default NavTab;