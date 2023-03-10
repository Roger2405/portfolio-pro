import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import ProfilePhoto from '../../assets/foto_perfil.jpg';
import './styles.scss';

export default function AboutMe() {

    return (
        <section id='aboutMe' className='aboutMe'>
            <div className='main'>
                <div className='info'>
                    <img src={ProfilePhoto} className='photo' />
                    <div className='tag'>
                        <p>Idade</p>
                        <p>19</p>
                    </div>
                    <div className='tag'>
                        <p>Cidade</p>
                        <p>Mallet - PR</p>
                    </div>
                    <div className='tag'>
                        <p>Cargo</p>
                        <p>Desenvolvedor Frontend</p>
                    </div>
                    <div className='tag'>
                        <p>Nível</p>
                        <p>Júnior</p>
                    </div>
                </div>
                <div className='social'>
                    <a className='link' href="https://www.linkedin.com/in/roger-romaniczen/" target="_blank">
                        <LinkedinLogo size={40} />
                        <span>
                            Linkedin
                        </span>
                    </a>
                    <a className='link' href="https://github.com/Roger2405" target="_blank">
                        <GithubLogo size={40} />
                        <span>
                            GitHub
                        </span>
                    </a>
                </div>
            </div>
            <div className='text'>
                <p>
                    Conheci a programação no final de 2020 e iniciei meus estudos com o desenvolvimento de jogos com a Unity. No início de 2022, iniciei meus estudos no desenvolvimento web com HTML5 e CSS3 e posteriormente com JavaScript, TypeScript e React.
                </p>
                <p>
                    Sou muito adaptável ao ambiente e tenho facilidade em adquirir novos conhecimentos. Gosto de resolver problemas e enfrentar desafios que me proporcionem novos conhecimentos.
                </p>
            </div>
        </section>
    )
}