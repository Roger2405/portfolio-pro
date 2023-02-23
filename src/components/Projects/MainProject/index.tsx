import './styles.scss';

import AjudameIcon from '../../../assets/icons/ajudame_logo.png'
import AjudameScreenshot from '../../../assets/screenshots/ajudame.png'
import { ProjectProps } from '../../../@types/project';
import { skillIcons } from '../../commons/SkillsIcons';
import { SkillsNameProps } from '../../../@types/skill';
import LinkButton from '../../commons/LinkButton';

export default function MainProject() {

    const mainProject: {
        name: string
        subtitle: string
        skills: SkillsNameProps[]
        inDevelopment: boolean
        sreenshotSrc: string
    } = {
        name: "AjudaME",
        subtitle: "Controle de Vendas e Estoque",
        skills: ["JavaScript", "TypeScript", "React Native", "MySQL", "NodeJS"],
        sreenshotSrc: AjudameScreenshot,
        inDevelopment: true,
    }

    return (
        <section className='mainProject'>
            <div className='header'>
                <div className='header__info'>
                    <img src="https://play-lh.googleusercontent.com/POOxI0XgrcFa1slX4-yu1vBDwN_EaPL_c3w-tXqgYOl35Q2_yjQIvCL2iXzC9CeAbx40=w240-h480-rw" />
                    <div className='header__info--name'>
                        <h3>{mainProject.name}</h3>
                        <h4>{mainProject.subtitle}</h4>
                    </div>
                </div>
                <div className='header__skills'>
                    {
                        mainProject.skills.map(
                            skill => {
                                return (<img key={skill} src={skillIcons.get(skill)} />)
                            }
                        )
                    }
                </div>
                <span className='tag-development'>Em desenvolvimento</span>
            </div>
            <img id='ajudame-screenshot' src={mainProject.sreenshotSrc} />
            <div className='description'>
                <p>Aplicativo Mobile de controle de vendas e
                    estoque para MEI (Micro Empreendedor
                    Individual).
                </p>
                <div className='description__details'>
                    <p className=''>O aplicativo tem como objetivo registrar e controlar vendas e estoque, com muitas funcionalidades opcionais para que seja uma ferramenta simples e de fácil manuseio.

                    </p>
                    <p className=''>
                        Com a interface simples e intuitiva, o projeto busca uma inclusão digital para Micro Empreendedores Individuais que ainda não possuem um controle formal e eficaz do seu negócio, ou, até mesmo, empreendedores informais que queiram alavancar o seu negócio e, posteriormente, formalizá-lo.
                    </p>
                    <p className=''>
                        No aplicativo será possível obter o histórico de vendas, visualizar os produtos mais vendidos, além de consultar gráficos, facilitando a interpretação dos dados e, consequentemente, proporcionando um maior controle sobre seu negócio.
                    </p>
                </div>

                <p>
                    Este é um projeto pessoal que também foi utilizado como trabalho acadêmico do curso de ADS.
                </p>
                <div className='div-link'>

                    <LinkButton contoured href='https://play.google.com/store/apps/details?id=com.ajudame.mobile' title='Ver na Play Store' />
                    {/* <LinkButton title='Ver repositório no GitHub' href='#' /> */}
                </div>
            </div>

        </section >
    )
}