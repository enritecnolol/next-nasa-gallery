import Image from "next/image";

export default function NavBar() {
  return (
    <nav className="bg-white border-gray-200 border border-b-2 rounded-lg">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <div className="flex items-center">
          <Image
            src="/logoNasa.png"
            className="h-8 mr-3"
            alt="nasa Logo"
            height={32}
            width={32}
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            Nasa gallery
          </span>
        </div>
      </div>
    </nav>
  );
}
