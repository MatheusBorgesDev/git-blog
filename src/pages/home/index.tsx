"use client";

import { useContext } from "react";

import { PostCard } from "../../components/post-card";
import { Profile } from "../../components/profile";
import { GitHubDataContext } from "../../contexts/github-data";
import { dateFormatter } from "../../utils/formatter";
import { SearchIssuesForm } from "./form/search-issues-form";

export function Home() {
  const { gitHubRepoIssues, issuesAmount } = useContext(GitHubDataContext);

  return (
    <main className="mx-auto flex w-[54rem] flex-col justify-center">
      <Profile />

      <div className="mt-16 flex flex-col gap-12">
        <div>
          <div className="flex w-full justify-between">
            <h2 className="text-lg font-bold text-baseSubtitle">Publicações</h2>
            <span className="text-baseSpan">{issuesAmount} publicações</span>
          </div>

          <SearchIssuesForm />
        </div>

        <div className="grid grid-cols-2 gap-8">
          {gitHubRepoIssues?.map((issue) => (
            <PostCard
              key={issue.number}
              title={issue.title}
              body={issue.body}
              createdAt={dateFormatter.format(new Date(issue.created_at))}
              issueNumber={issue.number}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
