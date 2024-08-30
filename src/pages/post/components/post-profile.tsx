import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

import { ProfileInfo } from "../../../components/profile-info";
import { TextLink } from "../../../components/text-link";

export function PostProfile() {
  return (
    <div className="-mt-24 flex w-full flex-col gap-5 rounded-xl bg-baseProfile px-10 py-8 text-blue shadow-lg">
      <div className="flex w-full items-center justify-between">
        <TextLink href="/">
          <FaChevronLeft size={12} /> Voltar
        </TextLink>

        <TextLink href="https://github.com/MatheusBorgesDev" target="_blank">
          Ver no GitHub <FaExternalLinkAlt size={12} />
        </TextLink>
      </div>

      <div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-baseTitle">
            JavaScript data types and data structures
          </h1>

          <div className="flex gap-6">
            <ProfileInfo icon={FaGithub}>
              <span>MatheusBorgesDec</span>
            </ProfileInfo>

            <ProfileInfo icon={FaCalendarDay}>
              <span>Há 1 dia</span>
            </ProfileInfo>

            <ProfileInfo icon={FaComment}>
              <span>5 Comentários</span>
            </ProfileInfo>
          </div>
        </div>
      </div>
    </div>
  );
}
