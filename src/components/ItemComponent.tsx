import Item from '../core/Item'
import IconItem from './IconItem'
interface ItemProps {
    item: Item
    localization: string
    version: string
}

export default function ItemComponent(props: ItemProps){

     return (
        <div>
            { props.item.name }<br/>
            <IconItem 
                item = { props.item } 
                version = { props.version } 
                localization = { props.localization } 
                className = {`m-2`}
            />
            { props.item.description ? props.item.description : 'sem descricao' } <br/>
            { props.item.plaintext ? props.item.plaintext :''}<br/>
            { props.item.into ? props.item.into[0] :''} <br/>
        </div> 
    )
}
