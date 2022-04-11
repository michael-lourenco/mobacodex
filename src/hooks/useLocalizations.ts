import Localization from '../core/Localization'
import { useEffect, useState } from 'react'
import LocalizationRepository from '../core/LocalizationRepository'
import LocalizationCollection from '../backend/db/LocalizationCollection'


export default function useLocalizations() {
    const repo: LocalizationRepository = new LocalizationCollection()


    const [localization,setLocalization] = useState<string>('pt_BR')
    const [localizations,setLocalizations] = useState<Localization[]>([])
  
    useEffect(getAll,[])
  
    function getAll() { 
      repo.getAll().then(localizations => {
        setLocalizations(localizations)
      })
    }
  
    function selectLocalization(localization:string) {
      setLocalization(localization)

    }
  
    async function deleteLocalization(localization:Localization) {
      await repo.delete(localization)
      getAll()
    }
  
    function newLocalization() {
      setLocalization('')

    }

    async function updateActiveLocalization(local:string){
      console.log('LOCAL DENTRO DO UPDATE ', local)
      setLocalization(local)
    }

    async function saveLocalization(localization:Localization) {
      await repo.save(localization)
      getAll()
    }

    return { 
      localization, 
      localizations, 
      selectLocalization,
      updateActiveLocalization,
    }
}
