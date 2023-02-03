import { useEffect, useState } from 'react';
import './styles.scss';

interface Props {
    title: {
        strong: string,
        small?: string
    },
    reverseDirection?: boolean
    headerStyle: 'left' | 'right'
}

export default function SectionHeader({ title, reverseDirection, headerStyle }: Props) {
    const [flexDirection, setFlexDirection] = useState<'column' | 'column-reverse'>()
    useEffect(() => {
        const direction = reverseDirection ? 'column-reverse' : 'column';
        setFlexDirection(direction)
    }, [])
    return (
        <div className={`sectionHeader ${headerStyle}`}>
            <div className={`container`}>
                <span>{title.small}</span>
                <h2 className='title'>
                    {title.strong}
                </h2>
            </div>
        </div >
    )
}