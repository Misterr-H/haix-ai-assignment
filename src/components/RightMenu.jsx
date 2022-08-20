const RightMenu = ({data, ind, readCallback, read, count, searchKeyword}) => {


    return (
        <div>
            {Object.values(data)[ind].comments.filter(comment => comment.text.includes(searchKeyword)).map((comment, index) => {
                return (
                    <div className={'flex flex-col border-2 border-gray-200 rounded-md mt-10'}>
                        <div className={'flex py-4 justify-center items-center rounded-t-md border-2 border-gray-200'}>
                            <div className={'w-1/4 flex justify-center'}>
                                {comment.date}
                            </div>
                            <div className={'w-1/4 flex justify-center font-bold'}>
                                {Object.keys(data)[ind]}
                            </div>
                            <div className={'w-1/4 flex justify-center'}>
                                Post Sentiment: {Object.values(data)[ind].sentimentPolarity["0"] < 0 ? '😡' : Object.values(data)[ind].sentimentPolarity["0"] < 0.5 ? '😐' : '😄'}
                            </div>
                            <div className={'w-1/4 flex justify-center'}>
                                <span className={'text-green-500 text-xl cursor-pointer'} onClick={() => {
                                    if(read<count)
                                    readCallback(read + 1)
                                }}>✓</span>
                            </div>
                        </div>
                        <div className={'mt-5 p-2'}>
                            {comment.text}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default RightMenu;