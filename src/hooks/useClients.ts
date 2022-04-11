import Client from '../core/Client'
import { useEffect, useState } from 'react'
import ClientRepository from '../core/ClientRepository'
import ClientCollection from '../backend/db/ClientCollection'
import useTableOrForm from './useTableOrForm'

export default function useClients() {
    const repo: ClientRepository = new ClientCollection()

    const { tableVisible, showTable, showForm } = useTableOrForm()

    const [client,setClient] = useState<Client>(Client.clientEmpty())
    const [clients,setClients] = useState<Client[]>([])
  
    useEffect(getAll,[])
  
    function getAll() { 
      repo.getAll().then(clients => {
        setClients(clients)
        showTable()
      })
    }
  
    function selectClient(client:Client) {
      setClient(client)
      showForm()
    }
  
    async function deleteClient(client:Client) {
      await repo.delete(client)
      getAll()
    }
  
    function newClient() {
      setClient(Client.clientEmpty())
      showForm()
    }
  
    async function saveClient(client:Client) {
      await repo.save(client)
      getAll()
    }

    return { 
        client,
        clients,
        newClient,
        saveClient,
        deleteClient,
        selectClient,
        getAll,
        showTable,
        tableVisible,
    }
}