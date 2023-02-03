import './styles.scss';

import AjudameIcon from '../../../assets/icons/ajudame_logo.png'
import AjudameScreenshot from '../../../assets/screenshots/ajudame.png'
import { ProjectProps } from '../../../@types/project';
import { skillIcons } from '../../commons/SkillsIcons';
import { SkillsNameProps } from '../../../@types/skill';
import LinkButton from '../../commons/SkillsIcons/LinkButton';

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
            <div className='mainProject__header'>
                <img src={AjudameIcon} />
                <div>
                    <h3>{mainProject.name}</h3>
                    <h4>{mainProject.subtitle}</h4>
                </div>
            </div>
            <div className='mainProject__skills'>
                {
                    mainProject.skills.map(
                        skill => {
                            return (<img src={skillIcons.get(skill)} />)
                        }
                    )
                }
            </div>
            <span className='tag-development'>Em desenvolvimento</span>
            <img src={mainProject.sreenshotSrc} />
            <div className='mainProject__description'>
                <p>Aplicativo Mobile de controle de vendas e
                    estoque para MEI (Micro Empreendedor
                    Individual).
                </p>

                <p className='mainProject__description--details'>O aplicativo tem como objetivo registrar e controlar vendas e estoque, com muitas funcionalidades opcionais para que seja uma ferramenta simples e de fácil manuseio.

                </p>
                <p className='mainProject__description--details'>
                    Com a interface simples e intuitiva, o projeto busca uma inclusão digital para Micro Empreendedores Individuais que ainda não possuem um controle formal e eficaz do seu negócio, ou, até mesmo, empreendedores informais que queiram alavancar o seu negócio e, posteriormente, formalizá-lo.
                </p>
                <p className='mainProject__description--details'>
                    No aplicativo será possível obter o histórico de vendas, visualizar os produtos mais vendidos, além de consultar gráficos, facilitando a interpretação dos dados e, consequentemente, proporcionando um maior controle sobre suas vendas.
                </p>
                <p>
                    Este é um projeto pessoal que também está
                    sendo utilizado como trabalho acadêmico do curso
                    de ADS.
                </p>
            </div>
            <div className='mainProject__div-link'>
                <LinkButton contoured title='Ver repositório no GitHub' href='#' />
            </div>

        </section >
    )
}