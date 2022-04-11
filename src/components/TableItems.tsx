import Item from '../core/Item'
import IconItem from './IconItem'
import Link from 'next/link'

interface TableItemsProps {
    items: Item[]
    localization: string
    version: string
    itemSelecionado?: (item: Item) => void
    itemExcluido?: (item: Item) => void
}

export default function TableItems(props: TableItemsProps) {

    function renderData() { 
        return props.items?.map((item, i) => {
            return (
                <div key = { item.id }
                    className = {`
                        ${i % 2 ===0 ? 'bg-purple-300' : 'bg-purple-100'}
                        flex 
                        flex-col 
                        items-center 
                        justify-center
                        h-50
                        w-50
                        p-2
                        m-2
                        mt-0.2
                        cursor-pointer
                        text-xs
                        text-center
                `}>
                    <Link href={`/${props.localization}/${props.version}/items/${ item.id }`} passHref>
                        <a>
                            <IconItem item = { item } version = { props.version } localization = { props.localization } className = {`m-2`}/>
                            { item.name }
                        </a>
                    </Link>
                </div>
            )
        })
    }

    return (
        <div className = {`
            grid 
            grid-cols-10
            gap-1 
        `}>
            { renderData() }
        </div>
    )
}
