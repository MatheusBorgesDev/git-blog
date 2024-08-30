import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";

import { ProfileInfo } from "./profile-info";
import { TextLink } from "./text-link";

export function Profile() {
  return (
    <div className="relative -mt-24 flex min-h-56 w-full items-center justify-between gap-8 rounded-xl bg-baseProfile px-10 py-8 shadow-lg">
      <TextLink className="absolute right-10 top-8">
        GITHUB <FaExternalLinkAlt />
      </TextLink>

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
          <ProfileInfo icon={FaGithub}>
            <span>MatheusBorgesDev</span>
          </ProfileInfo>

          <ProfileInfo icon={FaBuilding}>
            <span>Fig Digital</span>
          </ProfileInfo>

          <ProfileInfo icon={FaUserFriends}>
            <span>7 Seguidores</span>
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
}
