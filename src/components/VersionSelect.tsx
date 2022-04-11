import Version from '../core/Version'
import { IconEdit, IconTrash} from './Icons'

interface VersionSelectProps {
    versions: Version[]
    selectedVersion?: (version: Version) => void
    deletedVersion?: (version: Version) => void
}

export default function VersionSelect(props: VersionSelectProps) {

    function renderData() { 
        return props.versions?.map((item, i) => {
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
            <label>Esolha um patch:</label>
            <select 
                name = "patchs"
                className = {`
                flex
                justify-center
                versions-center
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
