import headerLogo from "../assets/device.png";

export default function Header() {
  return (
    <div className="flex w-full h-12 p-2 shadow-2xl shadow-blue-300 border-2 border-blue-100 justify-between">
      <div className="flex gap-2 pl-8">
        <h1 className="font-bold   text-xl">ElectroStore</h1>
        <img className="h-8 w-8" src={headerLogo} alt="logo of the store" />
      </div>
      <p className="text-blue-500  animate-bounce pr-8">Buy your favourite electornics items!!</p>
    </div>
  );
}
