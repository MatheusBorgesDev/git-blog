import { Header } from "./components/header";
import { Routes } from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-baseBackground antialiased">
      <Header />
      <Routes />
    </div>
  );
}
