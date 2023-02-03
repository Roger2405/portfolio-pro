import { GithubLogo, LinkedinLogo } from 'phosphor-react';
import './styles.scss';

export default function AboutMe() {

    return (
        <section id='aboutMe' className='aboutMe'>
            <div className='main'>
                <div className='info'>
                    <img />
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
                    <div className='link'>
                        <LinkedinLogo size={40} />
                        <a href="">Linkedin</a>
                    </div>
                    <div className='link'>
                        <GithubLogo size={40} />
                        <a href="">GitHub</a>
                    </div>
                </div>
            </div>
            <div className='text'>
                <p>

                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, itaque nam dicta voluptas quae possimus ipsa dolor enim repellat quo reprehenderit adipisci tenetur quas aliquid! Molestiae tempora neque vel quasi.
                </p>
                <p>

                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. A assumenda autem impedit quas aliquam voluptatibus numquam quam, sequi harum et quod eos veniam praesentium velit nam reiciendis quaerat dolores explicabo!
                </p>
            </div>
        </section>
    )
}