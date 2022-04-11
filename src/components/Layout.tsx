import Title from "./Title"
import Nav from './Nav'
import NavItem from './NavItem'
import NavLocalization from './NavLocalization'
import Localization from '../core/Localization'

interface LayoutProps {
    localization?: string
    version?: string
    localizations: Localization[]
    title: string
    children: any
}

export default function Layout(props: LayoutProps) {

    return (
        <>
            <Nav>
                <NavItem href="/" isActive>Home</NavItem>
                <NavItem href={`/${props.localization}/${props.version}/champions`}>Campeões</NavItem>
                <NavItem href={`/${props.localization}/${props.version}/items`}>Itens</NavItem>
                { props.localization ? 
                    <NavLocalization 
                        localizations = {props.localizations} 
                        localization = {props.localization} 
                        version = {props.version} 
                    /> : ''
                }
            </Nav>

            <div className = {`
                py-32 bg-gray-800 p-3
            `}>
                <Title>{ props.title }</Title>
                <div className = {`
                    p-6
                `}>
                    { props.children }
                </div>

            </div>
        </>
    )
}