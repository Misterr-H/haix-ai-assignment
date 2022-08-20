const LeftHeader = () => {
    return (
        <div className={'flex border-2 border-gray-200 justify-center items-center py-4 mt-2 rounded-md'}>
            <div className={'flex w-1/3 justify-center items-center'}>
                Username
            </div>
            <div className={'flex w-1/3 justify-center items-center'}>
                Comments
            </div>
            <div className={'flex w-1/3 justify-center items-center'}>
                Sentiment
            </div>
        </div>
    )
}

export default LeftHeader;