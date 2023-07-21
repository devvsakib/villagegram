const RightSidebar = () => {
    return (
        <div className="border-l w-[300px]">
            {/*  my profile */}
            <div className="flex justify-between items-center">
                <div className="flex items-center justify-between gap-5">
                    <div>
                        <img className="h-14 w-14 ml-1 rounded-full " src="https://github.com/devvsakib.png" alt="devvsakib" />
                    </div>
                    <div className="text-sm">
                        <h4 className="font-semibold">devvsakib</h4>
                        <p className="">Xavon Sakib</p>
                    </div>
                </div>
                <div>
                    <button className="text-[12px] text-blue-400">Switch</button>
                </div>
            </div>
            {/* suggested for user */}
            <div>

            </div>
        </div>
    )
}

export default RightSidebar