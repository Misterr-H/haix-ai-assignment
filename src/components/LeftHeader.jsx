import {useState} from "react";

const LeftHeader = ({sortCallback}) => {
    const [currentSortingMethod, setCurrentSortingMethod] = useState(0);

    return (
        <div className={'flex border-2 border-gray-200 justify-center items-center py-4 mt-2 rounded-md'}>
            <div className={'flex w-1/5 justify-center items-center'}>
                Username<span className={'ml-1 text-xl cursor-pointer'} onClick={() => {
                    setCurrentSortingMethod(currentSortingMethod == 1 ? 0 : 1)
                    sortCallback(currentSortingMethod)
            }}>↓</span>
            </div>
            <div className={'flex w-1/5 justify-center items-center'}>
                Comments<span className={'ml-1 text-xl cursor-pointer'} onClick={() => {
                    setCurrentSortingMethod(currentSortingMethod == 2 ? 0 : 2)
                    sortCallback(currentSortingMethod)
            }}>↓</span>
            </div>
            <div className={'flex w-1/5 justify-center items-center'}>
                Sentiment<span className={'ml-1 text-xl cursor-pointer'} onClick={() => {
                    setCurrentSortingMethod(currentSortingMethod == 3 ? 0 : 3)
                    sortCallback(currentSortingMethod)
            }}>↓</span>
            </div>
            <div className={'flex w-1/5 justify-center items-center'}>
                Likes<span className={'ml-1 text-xl cursor-pointer'} onClick={() => {
                    setCurrentSortingMethod(currentSortingMethod == 4 ? 0 : 4)
                    sortCallback(currentSortingMethod)
            }}>↓</span>
            </div>
            <div className={'flex w-1/5 justify-center items-center'}>
                Followers<span className={'ml-1 text-xl cursor-pointer'} onClick={() => {
                    setCurrentSortingMethod(currentSortingMethod == 5 ? 0 : 5)
                    sortCallback(currentSortingMethod)
            }}>↓</span>
            </div>
        </div>
    )
}

export default LeftHeader;