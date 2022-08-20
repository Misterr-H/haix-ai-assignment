import {useEffect, useState} from "react";

const LeftMenu = ({data, callback, currentSortingMethod}) => {
    const [resultList, setResultList] = useState(Object.values(data));

    useEffect(() => {
        switch (currentSortingMethod) {
            case 0:
                setResultList(Object.values(data))
                break;
            case 1:
                setResultList(Object.values(data).sort((a, b) => a.username.localeCompare(b.username)))
                break;
            case 2:
                setResultList(Object.values(data).sort((a,b) => a.comment_count - b.comment_count))
                break;
            case 3:
                setResultList(Object.values(data).sort((a,b) => a.sentimentPolarity["0"] - b.sentimentPolarity["0"]))
                break;
            case 4:
                setResultList(Object.values(data).sort((a,b) => a.likes - b.likes))
                break;
            case 5:
                setResultList(Object.values(data).sort((a,b) => a.followers - b.followers))
                break;
            default:
                setResultList(Object.values(data))
                break;
        }
    }, [currentSortingMethod, data])

    return (
        <div>
            {Object.keys(data).map((item, index) => {

                return (
                    <div className={'flex cursor-pointer border-2 border-gray-200 justify-center items-center py-10 mt-5 rounded-md'} onClick={() => {
                        callback(index);
                    }}>
                        <div className={'flex w-1/5 justify-center items-center'}>
                            {resultList === [] ? '' : resultList[index].username}
                        </div>
                        <div className={'flex w-1/5 justify-center items-center'}>
                            {resultList === [] ? '' : resultList[index].comment_count}
                        </div>
                        <div className={'flex w-1/5 justify-center items-center'}>
                            {resultList === [] ? '' : (resultList[index].sentimentPolarity["0"] < 0 ? '😡' : resultList[index].sentimentPolarity["0"] < 0.5 ? '😐' : '😄')}
                        </div>
                        <div className={'flex w-1/5 justify-center items-center'}>
                            {resultList === [] ? '' : resultList[index].likes}
                        </div>
                        <div className={'flex w-1/5 justify-center items-center'}>
                            {resultList === [] ? '' : resultList[index].followers}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LeftMenu;