import Logo from "./Logo";

export default function Header() {
  return (
    <nav className="flex items-center justify-center sm:justify-start flex-wrap px-6 py-3 border-b border-gray-300">
      <div className="flex items-center flex-shrink-0 text-grey-800 mr-6">
        <Logo height={34} className="mr-2" />
        <span className="font-semibold text-2xl sm:text-xl">DevTube</span>
      </div>
    </nav>
  );
}
