"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { PostCard } from "../../components/post-card";
import { Profile } from "../../components/profile";
import { GitHubDataContext } from "../../contexts/github-data";
import { dateFormatter } from "../../utils/formatter";

const SearchIssuesSchema = z.object({
  search: z.string(),
});

type SearchIssuesInput = z.infer<typeof SearchIssuesSchema>;

export function Home() {
  const { gitHubRepoIssues, issuesAmount, fetchGitHubRepoIssues } =
    useContext(GitHubDataContext);

  const { register, handleSubmit } = useForm<SearchIssuesInput>({
    resolver: zodResolver(SearchIssuesSchema),
  });

  if (!gitHubRepoIssues) {
    return null;
  }

  function handleSearchIssues(data: SearchIssuesInput) {
    console.log(data);
    fetchGitHubRepoIssues("git-blog", data.search);
  }

  return (
    <main className="mx-auto flex w-[54rem] flex-col justify-center">
      <Profile />

      <div className="mt-16 flex flex-col gap-12">
        <div>
          <div className="flex w-full justify-between">
            <h2 className="text-lg font-bold text-baseSubtitle">Publicações</h2>
            <span className="text-baseSpan">{issuesAmount} publicações</span>
          </div>

          <form onSubmit={handleSubmit(handleSearchIssues)}>
            <input
              type="text"
              className="mt-4 w-full rounded-lg border border-baseBorder bg-baseInput p-4 text-baseText placeholder:text-baseLabel"
              placeholder="Buscar conteúdo"
              {...register("search")}
            />
          </form>
        </div>

        <div className="grid grid-cols-2 gap-8">
          {gitHubRepoIssues.map((issue) => (
            <PostCard
              key={issue.title}
              title={issue.title}
              body={issue.body}
              createdAt={dateFormatter.format(new Date(issue.created_at))}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
