export default function ErrorComponent({error}){
    return (
    <div className="flex justify-center m-4">
      <div className="flex flex-col justify-center p-4  bg-red-200 h-32 w-fit">
      <p className="text-3xl text-red-500 ">An error Occured, Please try again later...</p>
      <p className="font-mono">Error: {error.message}</p>
      </div>
      </div>
    )
}