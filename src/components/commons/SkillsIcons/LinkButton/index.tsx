import './styles.scss';

interface Props {
    title: string
    contoured?: boolean
    href: string
}

export default function LinkButton({ title, contoured, href }: Props) {

    return (
        <a
            target="_blank"
            className={`button ${contoured ? 'contoured' : ''}`}
            href={href}>{title}
        </a>
    )
}