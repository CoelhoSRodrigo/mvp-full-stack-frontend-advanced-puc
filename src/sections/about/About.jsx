import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>Sobre mim</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Olá, meu nome é Rodrigo Coelho e, além de ser aluno da pos-graduação em Desenvolvimento Full Stack da PUC-Rio, sou mestrando em Engenharia Ambiental, possuo Post-MBA em ESG pelo COPPEAD UFRJ e graduação em Análise e Desenvolvimento de Sistemas. Ah, nas horas vagas também sou fotógrafo de natureza!
                </p>
                <p>
                Desde 2005 atuo na área na área de tecnologia da informação e tenho passagem por grandes empresas como Americanas, Bradesco Seguros e IBM. Possuo vasta experiência em projetos de desenvolvimento de software, metodologia ágil, inovação sustentável e mercado de créditos de carbono.
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About