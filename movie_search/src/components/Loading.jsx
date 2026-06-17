export default function Loading(){
    return(
        <div className="flex justify-center items-center m-4">
            <div className="animate-spin h-12 w-12 border-t-4 border-b-4 rounded-full border-white"></div>
            <h1 className="text-white text-2xl animate-bounce">Loading your movies...</h1>
        </div>
    )
}