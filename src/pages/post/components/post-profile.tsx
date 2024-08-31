import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import { ProfileInfo } from "../../../components/profile-info";
import { TextLink } from "../../../components/text-link";
import { gitHubUser } from "../../../contexts/github-data";

interface PostProfileProps {
  postTitle: string;
  postLink: string;
  postCommentsAmount: number;
  createdAt: string;
}

export function PostProfile({
  postTitle,
  postLink,
  postCommentsAmount,
  createdAt,
}: PostProfileProps) {
  return (
    <div className="-mt-24 flex w-full flex-col gap-5 rounded-xl bg-baseProfile px-10 py-8 text-blue shadow-lg">
      <div className="flex w-full items-center justify-between">
        <TextLink navigateTo="/">
          <FaChevronLeft size={12} /> Voltar
        </TextLink>

        <TextLink navigateTo={postLink} target="_blank">
          Ver no GitHub <FaExternalLinkAlt size={12} />
        </TextLink>
      </div>

      <div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-baseTitle">{postTitle}</h1>

          <div className="flex gap-6">
            <ProfileInfo icon={FaGithub}>
              <span>{gitHubUser}</span>
            </ProfileInfo>

            <ProfileInfo icon={FaCalendarDay}>
              <span>{createdAt}</span>
            </ProfileInfo>

            <ProfileInfo icon={FaComment}>
              <span>{postCommentsAmount} comentário(s)</span>
            </ProfileInfo>
          </div>
        </div>
      </div>
    </div>
  );
}
