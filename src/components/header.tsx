import Logo from "../assets/logo.svg";

export function Header() {
  return (
    <header className="bg-cover-image flex h-80 w-full justify-center bg-cover bg-center">
      <img src={Logo} className="-mt-12 w-40" alt="" />
    </header>
  );
}
