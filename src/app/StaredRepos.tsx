"use client";

import { useQuery } from "react-query";
import { fetchRepoData, fetchStarredData } from "@/api/fetchMethods";
import { useNameSlice } from "../store/nameSlice";
import RepositoryCard from "./RepositoryCard";

const StaredRepos = () => {
  const username = useNameSlice((state) => state.username);

  const { data } = useQuery("starred", () => fetchStarredData(username));

  return (
    <div className="mt-10 grid gap-5  min-[550px]:grid-cols-2  lg:grid-cols-2">
      {/* {data &&
        data.length > 0 &&
        data
          .filter((repo: any) => repo.fork === isForked)
          .map((repo: any, index: number) => ( */}
      {Array.from({ length: 10 }).map((_, i) => (
        <RepositoryCard
          data={[
            {
              id: 733363216,
              node_id: "R_kgDOK7Y8EA",
              name: "All_In_One_APP",
              full_name: "LinThit27/All_In_One_APP",
              private: false,
              owner: {
                login: "LinThit27",
                id: 106507721,
                node_id: "U_kgDOBlktyQ",
                avatar_url:
                  "https://avatars.githubusercontent.com/u/106507721?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/LinThit27",
                html_url: "https://github.com/LinThit27",
                followers_url:
                  "https://api.github.com/users/LinThit27/followers",
                following_url:
                  "https://api.github.com/users/LinThit27/following{/other_user}",
                gists_url:
                  "https://api.github.com/users/LinThit27/gists{/gist_id}",
                starred_url:
                  "https://api.github.com/users/LinThit27/starred{/owner}{/repo}",
                subscriptions_url:
                  "https://api.github.com/users/LinThit27/subscriptions",
                organizations_url:
                  "https://api.github.com/users/LinThit27/orgs",
                repos_url: "https://api.github.com/users/LinThit27/repos",
                events_url:
                  "https://api.github.com/users/LinThit27/events{/privacy}",
                received_events_url:
                  "https://api.github.com/users/LinThit27/received_events",
                type: "User",
                site_admin: false,
              },
              html_url: "https://github.com/LinThit27/All_In_One_APP",
              description:
                "A react-native app with a weather forecast, to-do list, blogs and currency converter",
              fork: false,
              url: "https://api.github.com/repos/LinThit27/All_In_One_APP",
              forks_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/forks",
              keys_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/keys{/key_id}",
              collaborators_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/collaborators{/collaborator}",
              teams_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/teams",
              hooks_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/hooks",
              issue_events_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/issues/events{/number}",
              events_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/events",
              assignees_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/assignees{/user}",
              branches_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/branches{/branch}",
              tags_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/tags",
              blobs_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/git/blobs{/sha}",
              git_tags_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/git/tags{/sha}",
              git_refs_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/git/refs{/sha}",
              trees_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/git/trees{/sha}",
              statuses_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/statuses/{sha}",
              languages_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/languages",
              stargazers_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/stargazers",
              contributors_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/contributors",
              subscribers_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/subscribers",
              subscription_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/subscription",
              commits_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/commits{/sha}",
              git_commits_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/git/commits{/sha}",
              comments_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/comments{/number}",
              issue_comment_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/issues/comments{/number}",
              contents_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/contents/{+path}",
              compare_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/compare/{base}...{head}",
              merges_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/merges",
              archive_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/{archive_format}{/ref}",
              downloads_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/downloads",
              issues_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/issues{/number}",
              pulls_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/pulls{/number}",
              milestones_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/milestones{/number}",
              notifications_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/notifications{?since,all,participating}",
              labels_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/labels{/name}",
              releases_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/releases{/id}",
              deployments_url:
                "https://api.github.com/repos/LinThit27/All_In_One_APP/deployments",
              created_at: "2023-12-19T06:49:27Z",
              updated_at: "2024-02-18T16:21:49Z",
              pushed_at: "2024-01-13T13:25:36Z",
              git_url: "git://github.com/LinThit27/All_In_One_APP.git",
              ssh_url: "git@github.com:LinThit27/All_In_One_APP.git",
              clone_url: "https://github.com/LinThit27/All_In_One_APP.git",
              svn_url: "https://github.com/LinThit27/All_In_One_APP",
              homepage: "",
              size: 1414,
              stargazers_count: 1,
              watchers_count: 1,
              language: "TypeScript",
              has_issues: true,
              has_projects: true,
              has_downloads: true,
              has_wiki: true,
              has_pages: false,
              has_discussions: false,
              forks_count: 0,
              mirror_url: null,
              archived: false,
              disabled: false,
              open_issues_count: 0,
              license: null,
              allow_forking: true,
              is_template: false,
              web_commit_signoff_required: false,
              topics: ["android", "react-native", "typescript"],
              visibility: "public",
              forks: 0,
              open_issues: 0,
              watchers: 1,
              default_branch: "main",
            },
          ]}
        />
      ))}
    </div>
  );
};

export default StaredRepos;
