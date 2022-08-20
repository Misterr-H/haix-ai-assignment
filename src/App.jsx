import NavTab from "./components/NavTab.jsx";
import LeftHeader from "./components/LeftHeader.jsx";
import LeftMenu from "./components/LeftMenu.jsx";
import {data} from "./data/data.js";
import RightHeader from "./components/RightHeader.jsx";
import {useState} from "react";
import RightMenu from "./components/RightMenu.jsx";

const App = () => {
    const [selected, setSelected] = useState(0);
    const [read, setRead] = useState(0);

    return (
        <div className={'p-5 border-2 border-gray-300 rounded-lg m-10'}>
            <NavTab tabs={
                ['By mentions', 'By influence', 'By engagement']
            }/>
            <div className={'flex border-2 border-gray-200 pb-20 rounded-md'}>
                <div className={'flex flex-col w-1/3'}>
                    <LeftHeader/>
                    <LeftMenu data={data.totalInfluencers} callback={(index) => {
                        setSelected(index);
                    }}/>
                </div>
                <div className={'flex flex-col w-2/3 ml-10'}>
                    <RightHeader count={Object.values(data.totalInfluencers)[selected].comment_count} read={read} />
                    <RightMenu
                        data={data.totalInfluencers}
                        ind={selected} count={Object.values(data.totalInfluencers)[selected].comment_count} read={read} readCallback={(val) => {
                        setRead(val);
                    }} />
                </div>
            </div>
        </div>
    )
}

export default App;