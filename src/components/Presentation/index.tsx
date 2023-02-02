import { ArrowDown } from 'phosphor-react';
import './styles.scss';

export default function Presentation() {
    return (
        <section className='presentation'>
            <p style={{
                fontSize: '5rem',

                lineHeight: '5rem',
                textTransform: 'uppercase'
            }}>Olá,</p>
            <p style={{ fontSize: '4rem', textAlign: 'center', lineHeight: '4rem', color: 'white' }}>sou Roger Romaniczen</p>
            <p style={{ fontSize: '2rem', fontWeight: 200, textAlign: 'right', color: 'white' }}>desenvolvedor frontend</p>
            <p style={{ fontSize: '1.5rem', lineHeight: '1.5rem', textAlign: 'right' }}>em busca da primeira <br />experiência profissional</p>
            <button about='avançar' className='arrow-button'>
                <ArrowDown size={80} color="#ffffff" />
            </button>
        </section>
    )
}