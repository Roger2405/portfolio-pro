import { ArrowDown } from 'phosphor-react';
import './styles.scss';

export default function Presentation() {

    return (
        <section className='presentation'>
            <div className='container'>
                <p style={{
                    fontSize: '5rem',
                    lineHeight: '5rem',
                    textTransform: 'uppercase'
                }}>Olá,</p>

                <p className='presentation__name'>sou Roger Romaniczen</p>
                <p className='presentation__office'>desenvolvedor frontend</p>
                <p className='presentation__phrase'>em busca da primeira <br />experiência profissional</p>

            </div>
            <a href='#aboutMe' about='avançar' className='arrow-button'>
                <ArrowDown style={{ marginLeft: 'auto' }} size={80} color="#ffffff" />
            </a>
        </section>
    )
}