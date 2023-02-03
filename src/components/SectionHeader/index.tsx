import { useEffect, useState } from 'react';
import './styles.scss';

interface Props {
    title: {
        strong: string,
        small: string
    },
    reverseDirection?: boolean
}

export default function SectionHeader({ title, reverseDirection }: Props) {
    const [flexDirection, setFlexDirection] = useState<'column' | 'column-reverse'>()
    useEffect(() => {
        const direction = reverseDirection ? 'column-reverse' : 'column';
        setFlexDirection(direction)
    }, [])
    return (
        <div className='sectionHeader'>
            <div className='container'>
                <div>
                    <h2 className='title' style={{
                        display: 'flex',
                        // flexDirection: `${reverseDirection ? 'column-reverse' : 'column'}`
                    }}>
                        <span>{title.small}</span>
                        <strong>{title.strong}</strong>
                    </h2>
                </div>
            </div>
        </div >
    )
}