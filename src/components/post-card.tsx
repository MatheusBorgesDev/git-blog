interface PostCardProps {
  title: string;
  body: string;
  createdAt: string;
}

export function PostCard({ title, body, createdAt }: PostCardProps) {
  return (
    <div className="flex h-64 w-full flex-col gap-5 rounded-lg bg-basePost p-8">
      <div className="flex gap-4">
        <h3 className="text-xl font-semibold text-baseTitle">{title}</h3>
        <span className="text-nowrap text-baseSpan">{createdAt}</span>
      </div>

      <p className="overflow-hidden text-ellipsis text-baseText">{body}</p>
    </div>
  );
}
