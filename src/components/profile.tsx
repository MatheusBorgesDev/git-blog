import { useContext } from "react";
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends,
} from "react-icons/fa";

import { GitHubDataContext, gitHubUser } from "../contexts/github-data";
import { ProfileInfo } from "./profile-info";
import { TextLink } from "./text-link";

export function Profile() {
  const { gitHubProfile } = useContext(GitHubDataContext);

  if (!gitHubProfile) {
    return null;
  }

  const { name, company, followers, bio } = gitHubProfile;

  return (
    <div className="relative -mt-24 flex min-h-56 w-full items-center justify-between gap-8 rounded-xl bg-baseProfile px-10 py-8 shadow-lg">
      <TextLink
        navigateTo={`https://github.com/${gitHubUser}`}
        target="_blank"
        className="absolute right-10 top-8"
      >
        GITHUB <FaExternalLinkAlt />
      </TextLink>

      <img
        src={`https://github.com/${gitHubUser}.png`}
        className="h-40 w-40 rounded-lg"
        alt="Profile picture"
      />

      <div className="flex flex-1 flex-col justify-center gap-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold text-baseTitle">{name}</h1>
          <p className="text-baseText">
            {bio === null ? <span>Desenvolvedor</span> : <span>{bio}</span>}
          </p>
        </div>

        <div className="flex gap-6">
          <ProfileInfo icon={FaGithub}>
            <span>{gitHubUser}</span>
          </ProfileInfo>

          <ProfileInfo icon={FaBuilding}>
            {company === null ? <span>Autônomo</span> : <span>{company}</span>}
          </ProfileInfo>

          <ProfileInfo icon={FaUserFriends}>
            <span>{followers} Seguidores</span>
          </ProfileInfo>
        </div>
      </div>
    </div>
  );
}
