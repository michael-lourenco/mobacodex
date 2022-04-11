import Link from 'next/link'
import Item from '../core/Item'
import Image from 'next/image'

interface IconItemProps { 
    className?: string
    version: string
    localization: string
    item?: Item
}

export default function IconItem(props: IconItemProps) {

    return (
        <div className = {`
            ${ props.className ?? '' }
        `}  >
            <Link 
                href= {`/${props.localization}/${props.version}/items/${props.item.id}`}   
            >
                    <Image
                        src={ props.item.icon ? 
                            `/dragontail/dragontail-${ props.version }/${ props.version }/img/item/${ props.item.icon }` : 
                            '/images/avatar.png' }
                        alt= { props.item.name }
                        width={64}
                        height={64}
                        className = {`
                        cursor-pointer
                        `}  
                    />
            </Link>
        </div>

    )
}
