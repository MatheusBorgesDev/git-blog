import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="flex h-80 w-full justify-center bg-cover-image bg-cover bg-center">
      <img src={Logo} className="-mt-16 w-40" alt="" />
    </header>
  );
}
