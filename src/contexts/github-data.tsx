import { createContext, ReactNode, useEffect, useState } from "react";

export interface GitHubProfile {
  name: string;
  login: string;
  company: string;
  followers: number;
  bio: string;
}

export interface GitHubRepoIssue {
  title: string;
  body: string;
  created_at: string;
}

export interface GitHubDataContextType {
  gitHubProfile?: GitHubProfile;
  gitHubRepoIssues?: GitHubRepoIssue[];
  issuesAmount?: number;
}

interface GitHubDataProviderProps {
  children: ReactNode;
}

const gitHubUser = "MatheusBorgesDev";

const repo = "git-blog";

export const GitHubDataContext = createContext({} as GitHubDataContextType);

export function GitHubDataProvider({ children }: GitHubDataProviderProps) {
  const [gitHubProfile, setGithubProfile] = useState<GitHubProfile>();
  const [gitHubRepoIssues, setGithubRepoIssues] = useState<GitHubRepoIssue[]>(
    [],
  );

  async function fetchGitHubProfile() {
    const response = await fetch(`https://api.github.com/users/${gitHubUser}`);
    const data = await response.json();

    setGithubProfile(data);
  }

  async function fetchGitHubRepoIssues(repo: string) {
    const response = await fetch(
      `https://api.github.com/repos/${gitHubUser}/${repo}/issues`,
    );
    const data = await response.json();

    setGithubRepoIssues(data);
  }

  const issuesAmount = gitHubRepoIssues?.length;

  useEffect(() => {
    fetchGitHubProfile();
    fetchGitHubRepoIssues(repo);
  }, []);

  return (
    <GitHubDataContext.Provider
      value={{ gitHubProfile, gitHubRepoIssues, issuesAmount }}
    >
      {children}
    </GitHubDataContext.Provider>
  );
}
