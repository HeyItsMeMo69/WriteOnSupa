import Image from "next/image";
import { InputButton } from "./components/InputButton/page";
export default function Home() {
  return (
    <div className="bg-orange-200 h-screen items-center justify-center flex flex-col gap-4">
        <InputButton />
    </div>
  );
}
