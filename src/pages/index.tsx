import Button from '../components/Button'
import Layout from '../components/Layout'
import Table from '../components/Table'
import TableItems from '../components/TableItems'
import VersionSelect from '../components/VersionSelect'
import LocalizationSelect from '../components/LocalizationSelect'
import Form from '../components/Form'
import useClients from '../hooks/useClients'
import useItems from '../hooks/useItems'
import useVersions from '../hooks/useVersions'
import useLocalizations from '../hooks/useLocalizations'
import Recipes from '../components/Recipes'
import React from 'react'

export default function Home() {
  const { 
    client, 
    clients, 
    newClient, 
    saveClient,
    selectClient, 
    deleteClient,
    showTable,
    tableVisible
  } = useClients()

  const { 
    item, 
    items, 
    selectItem, 
  } = useItems()

  const { 
    localization, 
    localizations, 
    selectLocalization, 
  } = useLocalizations()

  const { 
    version, 
    versions, 
    selectVersion, 
  } = useVersions()

  return (
    <div className = {`
      flex flex-grow 
      h-full 
      w-100
      justify-center
      items-center
      bg-gradient-to-r
      from-blue-500
      to-purple-500
      text-white
      
    `}>
      <Layout localizations = { localizations } title = {`LoL Items`}>
        { tableVisible ? (
          <>
            <div className = {`
              flex
              justify-end
            `}>
            </div>
            <LocalizationSelect 
              localizations = { localizations } 
              ></LocalizationSelect> 
            <VersionSelect 
              versions = { versions } 
              ></VersionSelect>      
            <TableItems 
              localization = { localization }
              version = { version }
              items = { items } 
              itemSelecionado = { selectItem }
              itemExcluido = { selectItem }
              ></TableItems>

          </>
        ) : (
          <Form 
            client = { client }
            clientChanged = { saveClient }
            canceled = { showTable }
          />
        )}
      </Layout>
    </div>
  )
}
