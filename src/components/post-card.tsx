import ReactMarkDown from "react-markdown";
import { Link } from "react-router-dom";

interface PostCardProps {
  title: string;
  body: string;
  createdAt: string;
  issueNumber: number;
}

export function PostCard({
  title,
  body,
  createdAt,
  issueNumber,
}: PostCardProps) {
  return (
    <Link
      to={`/post/${issueNumber}`}
      className="flex h-[260px] w-full cursor-pointer flex-col gap-5 rounded-lg bg-basePost p-8 transition hover:scale-[1.05] hover:bg-basePost/80"
    >
      <div className="flex gap-4">
        <h3 className="text-xl font-semibold text-baseTitle">{title}</h3>
        <span className="text-nowrap text-baseSpan">{createdAt}</span>
      </div>

      <div className="overflow-hidden text-ellipsis text-baseText">
        <ReactMarkDown>{body}</ReactMarkDown>
      </div>
    </Link>
  );
}
