const LeftMenu = ({data, callback}) => {


    return (
        <div>
            {Object.keys(data).map((item, index) => {
                return (
                    <div className={'flex cursor-pointer border-2 border-gray-200 justify-center items-center py-10 mt-5 rounded-md'} onClick={() => {
                        callback(index);
                    }}>
                        <div className={'flex w-1/3 justify-center items-center'}>
                            {item}
                        </div>
                        <div className={'flex w-1/3 justify-center items-center'}>
                            {Object.values(data)[index].comment_count}
                        </div>
                        <div className={'flex w-1/3 justify-center items-center'}>
                            {Object.values(data)[index].sentimentPolarity["0"]}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default LeftMenu;