import SectionHeader from "../commons/SectionHeader";
import coursesJson from "../../data/courses.json";
import './styles.scss';
import { CourseProps } from "../../@types/course";
import LinkButton from "../commons/LinkButton";

export default function Education() {
    const courses: CourseProps[] = coursesJson;

    return (
        <section className="education-section" id="education">
            <SectionHeader headerStyle='right' title={{ strong: 'formações', small: '' }} />
            <div className='content'>
                <div>
                    <h3>Formações acadêmicas</h3>
                    <div className="container">
                        <div className="container__item">
                            <p className="container__item--name">Análise e Desenvolvimento de Sistemas</p>
                            <p className="container__item--institution">UNINTER</p>
                            <span className="container__item--duration">ago/2021 - mar/2024</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h3>Cursos</h3>
                    <div className="container">
                        {
                            courses.map(course => {
                                return <div className="container__item">
                                    <p className="container__item--name">{course.name}</p>
                                    <p className="container__item--institution">{course.institution}</p>
                                    <span className="container__item--duration">carga horária: {course.workload} horas</span>
                                    {/* <a className="container__item--certificate" href={course.certificateUrl}>Ver credencial</a> */}
                                    <div className="container__item--certificate">
                                        <LinkButton href={course.certificateUrl} title="Ver certificado" contoured small />

                                    </div>
                                </div>

                            })
                        }
                    </div>
                </div>
                <div>
                    <h3>Idiomas</h3>
                    <div className="container">
                        <div className="container__item">
                            <p className="container__item--name">Inglês</p>
                            <p className="container__item--institution">KNN Idiomas</p>
                            <span className="container__item--duration">mar/2022 - mar-2024</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}