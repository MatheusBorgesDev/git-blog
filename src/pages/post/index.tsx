import { useEffect, useState } from "react";
import ReactMarkDown from "react-markdown";
import { useParams } from "react-router-dom";

import { GitHubRepoIssue, gitHubUser, repo } from "../../contexts/github-data";
import { axiosGitHub } from "../../lib/axios";
import { dateFormatter } from "../../utils/formatter";
import { PostProfile } from "./components/post-profile";

export function PostDetails() {
  const { issueNumber } = useParams();
  const [currentIssue, setCurrentIssue] = useState<GitHubRepoIssue | null>(
    null,
  );

  useEffect(() => {
    async function fetchIssue() {
      const response = await axiosGitHub.get(
        `/repos/${gitHubUser}/${repo}/issues/${issueNumber}`,
      );

      setCurrentIssue(response.data);
    }

    fetchIssue();
  }, [issueNumber]);

  console.log(currentIssue);

  return (
    <main className="mx-auto flex w-[54rem] flex-col justify-center">
      <PostProfile
        postTitle={currentIssue?.title || ""}
        postLink={currentIssue?.html_url || ""}
        postCommentsAmount={currentIssue?.comments || 0}
        createdAt={
          currentIssue?.created_at
            ? dateFormatter.format(new Date(currentIssue.created_at))
            : ""
        }
      />
      <div className="px-8 py-10 text-baseText">
        <ReactMarkDown>{currentIssue?.body}</ReactMarkDown>
      </div>
    </main>
  );
}
