import Localization from '../core/Localization'
import { IconEdit, IconTrash} from './Icons'

interface LocalizationSelectProps {
    localizations: Localization[]
    selectedLocalization?: (localization: Localization) => void
    deletedLocalization?: (localization: Localization) => void
}

export default function LocalizationSelect(props: LocalizationSelectProps) {

    function renderData() { 
        return props.localizations?.map((item, i) => {
            return (            
                <option 
                    key = { i } 
                    value= { item.id } 
                    className = {`
                        w-1/2
                        p-1
                        m-1
                    `} 
                >
                    { item.id }
                </option>
            )
        })
    }

    return (
        <>
            <label>Localização:</label>
            <select 
                name = "localizations"
                className = {`
                flex
                justify-center
                localizations-center
                text-red-500
                rounded-full
                w-1/2
                p-1
                m-1
                hover:bg-purple-50
            `} 
            >
                { renderData() }
            </select>
        </>
    )
}
