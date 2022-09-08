import "./styles.css";
import { Side } from "../components/side";
import axios from "axios";
import { useState } from "react";
import { FolderSimple, GitFork, List, Star } from "phosphor-react";

interface Repository {
  name: string;
  id: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  language: string;
  forks_count: number;
}

export function Home() {
  const [repos, setRepos] = useState<Repository[]>();

  const [showSide, setShowSide] = useState<boolean>(false)

  axios.get("https://api.github.com/users/imbard/repos").then((response) => {
    setRepos(response.data);
  });

  return (
    <div className="body">
      <button onClick={() => setShowSide(!showSide)} className="button_tab">
        <List size={32} />
      </button>
      <Side display={showSide}/>

      <main className="main">
        <header className="My-Projects">My Projects</header>
        <ul className="ul">
          {repos?.map((item) => {
            return (
              <a className="repo_a" href={item.html_url}>
                <li className="li" key={item.id}>
                  <h1 className="title_repo">
                    <FolderSimple size={22} /> {item.name}
                  </h1>

                  <p className="desc">{item.description}</p>

                  <div className="details_repo">
                    <span>
                      <Star size={22} />
                      {item.stargazers_count}

                      <GitFork size={22} />
                      {item.forks_count}
                    </span>
                    <span className="fds">{item.language}</span>
                  </div>
                </li>
              </a>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
