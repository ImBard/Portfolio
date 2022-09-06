import {
  MapPin,
  GraduationCap,
  GithubLogo,
  LinkedinLogo,
  EnvelopeSimple,
} from "phosphor-react";

export function Side() {
  return (
    <div className="side">
      <div className="card-side">
        <div className="perfil">
          <img src="https://github.com/imbard.png" alt="img_perfil" />
          <h1>Talison Cardoso</h1>
          <p>Full Stack Developer</p>
        </div>
      </div>

      <div className="card-side">
        <div className="location">
          <label htmlFor="">
            <MapPin size={22} />
            <span>Brazil</span>
          </label>

          <label htmlFor="">
            <GraduationCap size={22} />
            <span>FATEC São José dos Campos</span>
          </label>

          <a href="https://github.com/ImBard">
            <GithubLogo size={22} />
            <span>ImBard</span>
          </a>

          <a href="https://www.linkedin.com/in/talison-brendon/">
            <LinkedinLogo size={22} />
            <span>Talison Cardoso</span>
          </a>

          <label htmlFor="">
            <EnvelopeSimple size={22} />
            <span>talison.bmc@gmail.com</span>
          </label>

          <label htmlFor="">
            <MapPin size={22} />
            <span>Brazil</span>
          </label>
        </div>
      </div>

      <div className="card-side">
        <h1 className="h1-tech">Tecnologias</h1>
        <div className="tech">
          <a href="">JAVASCRIPT</a>
          <a href="">REACTJS</a>
          <a href="">NODEJS</a>
          <a href="">GIT</a>
          <a href="">GITHUB</a>
          <a href="">HTML</a>
          <a href="">CSS</a>
          <a href="">REACT-NATIVE</a>
          <a href="">NESTJS</a>
        </div>
      </div>
    </div>
  );
}
