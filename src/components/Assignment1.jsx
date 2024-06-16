

export default function Assignment1(){
    return(
       <>
        <div className="w-screen h-screen  bg-zinc-800 flex justify-center items-center" >
        <div className="flex flex-col  justify-center h-1vh w-96 border-gray-950 bg-white items-center">
            <div className="bg-blue-200 w-96 h-48  border relative">
            <img src="https://guruprasad403.github.io/cv/image/Profile.png" className="rounded-full absolute top-24 left-32 w-32 h-32" alt="Image" />
            </div>
            <div className=" w-96 h-44 border-b-zinc-950 flex flex-col justify-center items-center pt-10">
                <h1 className=" font-bold text-2xl font-serif ">Guru Prasad <span className="opacity-50 text-xl">20</span></h1>
                <h3 className="opacity-50 font-sans" >Bellary</h3>
            </div>
            <div className=" w-96 h-40 border flex fle-row justify-evenly pt-5">
                <div>
                    <h1 className=" font-bold text-2xl font-serif " >80k</h1>
                    <h3 className="opacity-50 font-sans">Followers</h3>
                </div>
                <div>
                    <h1 className=" font-bold text-2xl font-serif ">803k</h1>
                    <h3 className="opacity-50 font-sans">Likes</h3>
                </div>
                <div>
                    <h1 className=" font-bold text-2xl font-serif ">1.4k</h1>
                    <h3 className="opacity-50 font-sans">photos</h3>
                </div>
            </div>
        </div>
        </div>
       </>
    )
}