import {
  FaCalendarDay,
  FaChevronLeft,
  FaComment,
  FaExternalLinkAlt,
  FaGithub,
} from "react-icons/fa";

export function PostProfile() {
  return (
    <div className="-mt-24 flex w-full flex-col gap-5 rounded-xl bg-baseProfile px-10 py-8 text-blue shadow-lg">
      <div className="flex w-full items-center justify-between">
        <a href="/" className="flex items-center gap-2 text-sm uppercase">
          <FaChevronLeft size={12} /> Voltar
        </a>

        <a
          href="https://github.com/MatheusBorgesDev"
          target="_blank"
          className="flex items-center gap-2 text-sm uppercase text-blue hover:border-b hover:border-blue"
        >
          Ver no GitHub <FaExternalLinkAlt size={12} />
        </a>
      </div>

      <div>
        <div className="space-y-3">
          <h1 className="text-2xl font-bold text-baseTitle">
            JavaScript data types and data structures
          </h1>

          <div className="flex gap-6">
            <div className="flex items-center gap-2 text-baseSubtitle">
              <FaGithub size={18} className="text-baseLabel" />
              <span>MatheusBorgesDev</span>
            </div>

            <div className="flex items-center gap-2 text-baseSubtitle">
              <FaCalendarDay size={18} className="text-baseLabel" />
              <span>Há 1 dia</span>
            </div>

            <div className="flex items-center gap-2 text-baseSubtitle">
              <FaComment size={18} className="text-baseLabel" />
              <span>5 Comentários</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
