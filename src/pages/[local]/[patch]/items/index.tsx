import Layout from '../../../../components/Layout'
import Table from '../../../../components/Table'
import TableItems from '../../../../components/TableItems'
import VersionSelect from '../../../../components/VersionSelect'
import LocalizationSelect from '../../../../components/LocalizationSelect'
import useClients from '../../../../hooks/useClients'
import useItems from '../../../../hooks/useItems'
import useLocalizations from '../../../../hooks/useLocalizations'
import useVersions from '../../../../hooks/useVersions'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'


export default function Index() {

  const router = useRouter()

  const { local, patch } = router.query

  const localString = local as string
  const patchString = patch as string
  
  const { 
    client, 
    clients, 
    selectClient, 
    showTable,
    tableVisible
  } = useClients()

  const { 
    items,
    getAll,
    countItems,
    getCountItems
  } = useItems()

  const { 
    localizations,
  } = useLocalizations()

  const { 
    versions,
  } = useVersions()

  useEffect(()=> {
    if(localString != undefined && patchString != undefined){
      getCountItems( patchString, localString)
      getAll(patchString, localString)
      
    }
  },[router?.query])

  
  return (
    <div className ='
      flex flex-grow 
      h-full 
      w-100
      justify-center
      items-center
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      text-white 
    '>
      { localString != undefined && patchString != undefined ?
        <Layout title = {`LoL Items`} localizations = { localizations } localization = { localString } version = {patchString}>
          <>       
            <VersionSelect versions = { versions } />   
            <h1>ESTOU AQUI - { countItems ? countItems :'' } </h1>
              <TableItems 
                localization = {  localString }
                version = { patchString }
                items = { items }
              /> 
          </>
        </Layout> :''
      }
    </div>
  )
}
