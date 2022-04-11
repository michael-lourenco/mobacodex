import Layout from '../../../../components/Layout'
import Table from '../../../../components/Table'
import ItemComponent from '../../../../components/ItemComponent'
import VersionSelect from '../../../../components/VersionSelect'
import LocalizationSelect from '../../../../components/LocalizationSelect'
import useClients from '../../../../hooks/useClients'
import useItems from '../../../../hooks/useItems'
import useLocalizations from '../../../../hooks/useLocalizations'
import useVersions from '../../../../hooks/useVersions'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Recipes from '../../../../components/Recipes'
import React, { useEffect } from 'react'


export default function Index() {
  const router = useRouter()

  const { local, id, patch } = router.query

  const idString = id as string
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
    item,
    items,
    getItem,
  } = useItems()

  const { 
    localizations,
  } = useLocalizations()

  const { 
    versions,
  } = useVersions()

  useEffect(()=> {
    if(localString != undefined && patchString != undefined && idString != undefined){
      getItem(patchString, localString, idString)
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
      { localString != undefined && patchString != undefined && idString != undefined ?
        <Layout title = { item.name } localizations = { localizations } localization = { localString } version = {patchString}>
           <ItemComponent item = { item } localization = { localString } version = {patchString}/>
        </Layout> :''
      }
    </div>
  )
}
