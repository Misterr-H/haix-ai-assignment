
const RightHeader = ({count, read}) => {

    return (
        <div className={'flex flex-col border-2 border-gray-200 rounded-md'}>
            <div className={'flex py-6 border-2 border-gray-200 rounded-md'}>
                <div className={'ml-4 font-bold'}>
                    Influencer Comments
                </div>
                <div className={'ml-auto flex'}>
                    <div className={'mx-4'}>
                        <span>Total Count: <span className={'font-bold'}>{count}</span></span>
                    </div>
                    <div className={'mx-4'}>
                        <span>Read: <span className={'font-bold'}>{read}</span></span>
                    </div>
                    <div className={'mx-4'}>
                        <span>Unread: <span className={'font-bold'}>{count - read}</span></span>
                    </div>
                </div>
            </div>
            <div className={'flex py-4 justify-center items-center'}>
                <div className={'w-1/4 flex justify-center'}>
                    Upload
                </div>
                <div className={'w-1/4 flex justify-center'}>
                    Username
                </div>
                <div className={'w-1/4 flex justify-center'}>
                    Sentiment
                </div>
                <div className={'w-1/4 flex justify-center'}>
                    Mark as Read
                </div>
            </div>
        </div>
    )
}

export default RightHeader;