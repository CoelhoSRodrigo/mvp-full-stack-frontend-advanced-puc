import './portfolio.css'
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import data from './data'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(data);

  const categories = data.map(item => item.category);
  const uniqueCategories = ["all", ...new Set(categories)];
  
  const filterProjectsHandler = (category) => {
    if(category === "all") {
      setProjects(data);
      return;
    }

    const filterProjects = data.filter(project => project.category === category);
    setProjects(filterProjects);
  }
  

  return (
    <section id="portfolio">
      <h2>Meus Projetos</h2>
      <p>
      Confira alguns projetos que desenvolvi durante a Pós-Graduação em Desenvolvimento Full Stack da PUC-Rio. Use os botões para alternar entre as diferentes categorias!
      </p>
      <div className="container portfolio__container">
        <ProjectsCategories categories={uniqueCategories} onFilterProjects={filterProjectsHandler}/>
        <Projects projects={projects}/>
      </div>
    </section>
  )
}

export default Portfolio