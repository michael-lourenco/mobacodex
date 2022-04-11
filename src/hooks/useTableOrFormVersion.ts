import { useState } from "react";

export default function useTableOrFormVersion () { 
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const showVersionSelect = () => setVisible('table')

    const showFormVersion = () => setVisible('form')

    return { 
         formVersionVisible: visible === 'form',
         versionSelectVisible: visible === 'table',
         showVersionSelect,
         showFormVersion,
    }
}