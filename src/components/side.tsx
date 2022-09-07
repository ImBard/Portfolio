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

      <div className="card-side">
        <h1 className="h1-exp">Experiências</h1>
        <ul>
          <li>
            <p className="p">Atento S/A Brasil</p>
            <p className="p-txt">maio de 2019 - agosto de 2020</p>
            <p className="p-txt">RH Motivacional</p>
          </li>
          <li>
            <p className="p">Artifios Armarinhos</p>
            <p className="p-txt">setembro de 2020 - novembro de 2021</p>
            <p className="p-txt">Estoque</p>
          </li>
        </ul>
      </div>
      <div className="card-side">
        <h1 className="h1-exp">Educação</h1>
        <ul>
          <li>
            <p className="p">Valmar Lourenço Santiago</p>
            <p className="p-txt">Ensino Medio</p>
            <p className="p-txt">Concluído em 2017</p>
          </li>
          <li>
            <p className="p">ETEC Prof. Ilza Nascimento pintus</p>
            <p className="p-txt">Técnico em Desenvolvimento de Sistemas</p>
            <p className="p-txt">fevereiro de 2020 - junho de 2022</p>
          </li>

          <li>
            <p className="p">Fatec São José dos Campos</p>
            <p className="p-txt">Análise e Desenvolvimento de Sistemas</p>
            <p className="p-txt">agosto 2022 - Cursando</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
