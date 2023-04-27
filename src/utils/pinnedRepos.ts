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
    return data;
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
