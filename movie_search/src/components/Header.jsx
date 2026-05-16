import { Clapperboard } from "lucide-react";

export default function Header() {
  return (
    <div className="flex flex-row h-32 w-full gap-2">
      <Clapperboard size={80} color="red" className="m-2" />
      <div className="text-white text-5xl m-2 mt-4">
        <h1 >CineScope</h1>
        <p className="text-sm italic">Discover Movies instantly!!</p>
      </div>  
    </div>
  );
}
