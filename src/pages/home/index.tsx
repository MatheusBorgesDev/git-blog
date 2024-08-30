import { PostCard } from "../../components/post-card";
import { Profile } from "../../components/profile";

export function Home() {
  return (
    <main className="mx-auto flex w-[54rem] flex-col justify-center">
      <Profile />

      <div className="mt-16 flex flex-col gap-12">
        <div>
          <div className="flex w-full justify-between">
            <h2 className="text-lg font-bold text-baseSubtitle">Publicações</h2>
            <span className="text-baseSpan">6 publicações</span>
          </div>

          <form action="">
            <input
              type="text"
              className="mt-4 w-full rounded-lg border border-baseBorder bg-baseInput p-4 text-baseText placeholder:text-baseLabel"
              placeholder="Buscar conteúdo"
            />
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </div>
    </main>
  );
}
