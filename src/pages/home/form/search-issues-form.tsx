import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { GitHubDataContext } from "../../../contexts/github-data";

const SearchIssuesSchema = z.object({
  search: z.string(),
});

type SearchIssuesInput = z.infer<typeof SearchIssuesSchema>;

export function SearchIssuesForm() {
  const { gitHubRepoIssues, fetchGitHubRepoIssues } =
    useContext(GitHubDataContext);

  const { register, handleSubmit } = useForm<SearchIssuesInput>({
    resolver: zodResolver(SearchIssuesSchema),
  });

  if (!gitHubRepoIssues) {
    return null;
  }

  function handleSearchIssues(data: SearchIssuesInput) {
    fetchGitHubRepoIssues("git-blog", data.search);
  }
  return (
    <div>
      <form onSubmit={handleSubmit(handleSearchIssues)}>
        <input
          type="text"
          className="mt-4 w-full rounded-lg border border-baseBorder bg-baseInput p-4 text-baseText placeholder:text-baseLabel"
          placeholder="Buscar conteúdo"
          {...register("search")}
        />
      </form>
    </div>
  );
}
