import "./styles.css"
import { Side } from "../components/side"
import axios from "axios"
import { useState } from "react"

interface Repository {
  name: string;
  id: string;
}

export function Home() {

  const [repos, setRepos] = useState<Repository[]>([]);

  axios.get('https://api.github.com/users/imbard/repos')
  .then((response) => {
    setRepos(response.data)
  })

  return (
    <div className="body">
      <Side />

      <main className="main">
        <header className="My-Projects">
          My Projects
        </header>
        <ul>
          <li>{repos[2].name}</li>
          <li>{repos[3].name}</li>
        
        </ul>
      </main>
    </div>
  )
}