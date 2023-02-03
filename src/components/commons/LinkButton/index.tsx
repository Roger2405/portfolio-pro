import './styles.scss';

interface Props {
    title: string
    contoured?: boolean
    small?: boolean
    href: string
}

export default function LinkButton({ title, contoured, small, href }: Props) {

    return (
        <a
            target="_blank"
            className={`button ${contoured ? 'contoured' : ''} ${small ? 'small' : ''} `}
            href={href}><span></span>{title}
        </a>
    )
}