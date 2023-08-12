const LoadingScreen = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className=''>
                <img className="w-2/5 mx-auto" src="assets/loadingLogo.png" alt="Logo.png" srcSet="assets/loadingLogo.png 1x" />
                <img className="absolute bottom-10 translate-x-[30%]" src="assets/Footer-Logo.svg" alt="" />
            </div>
        </div>
    )
}

export default LoadingScreen