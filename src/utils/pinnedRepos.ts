import { UserRepo } from "@/types/types";
import axios from "axios";

async function getPinnedRepos() {
  try {
    const { data, status } = await axios.get<UserRepo[]>(
      "https://gh-pinned-repos.egoist.dev/?username=ryuuzu",
      {
        headers: {
          Accept: "application/json",
        },
      }
    );
    let pinnedRepos: (UserRepo | undefined)[] = data.map((repo) => {
      if (repo.language !== undefined) {
        axios
          .get(
            `https://api.github.com/repos/${repo.owner}/${repo.repo}/languages`,
            {
              headers: {
                Accept: "application/json",
              },
            }
          )
          .then((response) => {
            repo.languages = Object.keys(response.data);
          });
      }
      return repo;
    });
    return pinnedRepos;
  } catch (error) {
    console.log(error);
  }
}

// const getPinnedRepos = () => {
//   axios
//     .get("https://gh-pinned-repos.egoist.dev/?username=ryuuzu")
//     .then((response) => {
//       return response.data;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// };

export default getPinnedRepos;
