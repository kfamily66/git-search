import token from "../../git-token";

const getRepos = username =>
  fetch(`https://api.github.com/users/${username}/repos?per_page=3`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

export default getRepos;
