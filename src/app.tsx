import { Header } from "./components/header";
import { GitHubDataProvider } from "./contexts/github-data";
import { Routes } from "./routes";

export default function App() {
  return (
    <div className="min-h-screen bg-baseBackground antialiased">
      <GitHubDataProvider>
        <Header />
        <Routes />
      </GitHubDataProvider>
    </div>
  );
}
