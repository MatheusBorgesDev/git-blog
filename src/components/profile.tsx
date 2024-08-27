import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";

export function Profile() {
  return (
    <div className="relative -mt-24 flex min-h-56 w-full items-center justify-between gap-8 rounded-xl bg-baseProfile px-10 py-8 shadow-lg">
      <a
        href="https://github.com/MatheusBorgesDev"
        target="_blank"
        className="absolute right-10 top-8 flex items-center gap-2 text-sm text-blue hover:border-b hover:border-blue"
      >
        GITHUB <FaExternalLinkAlt size={12} />
      </a>

      <img
        src="https://github.com/MatheusBorgesDev.png"
        className="h-40 w-40 rounded-lg"
        alt="Profile picture"
      />

      <div className="flex flex-1 flex-col justify-center gap-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-baseTitle">Matheus Borges</h1>
          <p className="text-baseText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio facere
            corporis quas cupiditate voluptatibus, fuga unde deserunt! Labore
            alias unde optio porro nihil nobis maiores quibusdam dolores libero!
            Commodi, dignissimos.
          </p>
        </div>

        <div className="flex gap-6">
          <div className="flex items-center gap-2 text-baseSubtitle">
            <FaGithub size={18} className="text-baseLabel" />
            <span>MatheusBorgesDev</span>
          </div>

          <div className="flex items-center gap-2 text-baseSubtitle">
            <FaBuilding size={18} className="text-baseLabel" />
            <span>Fig Digital</span>
          </div>

          <div className="flex items-center gap-2 text-baseSubtitle">
            <FaUserFriends size={18} className="text-baseLabel" />
            <span>7 Seguidores</span>
          </div>
        </div>
      </div>
    </div>
  );
}
