import Item from '../core/Item'
import { useEffect, useState } from 'react'
import ItemRepository from '../core/ItemRepository'
import ItemCollection from '../backend/db/ItemCollection'

export default function useItems() {
    const repo: ItemRepository = new ItemCollection()

    const [item,setItem] = useState<Item>(Item.clientEmpty())
    const [items,setItems] = useState<Item[]>([])
    const [local,setLocal] = useState<string>('pt_BR')
    const [ver,setVer] = useState<string>('7.1.1')
    const [countItems, setCountItems] = useState<number>(0)

    function getAll(patch, localization) {
      setLocal(localization) 
      repo.getAll(patch, localization).then(itemsRepo => {
        setItems(itemsRepo)
      })
    }

    function getCountItems(patch, localization) {
      setLocal(localization)
      repo.getCount(patch, localization).then(itemsRepo => {
        console.log('ITEMS COUNT', itemsRepo)
        setCountItems(itemsRepo)
      })
    }

    function getItem(patch, localization, id){
      repo.getItem(patch, localization, id).then(itemRepo => {
        setItem(itemRepo)
        return itemRepo;
      })
    }

    useEffect(()=> {
      getAll(ver, local)
    },[local])

    useEffect(()=> {
      getItem
    },[])

    function selectItem(item:Item) {
      setItem(item)
    }

    function selectLocal(novoLocal:string) {
      setLocal(novoLocal)
    }
    
    function selectVer(novaVer:string) {
      setVer(novaVer)
    }

    return { 
        item,
        items,
        local,
        selectLocal,
        setLocal,
        ver,
        selectVer,
        selectItem,
        getItem,
        getAll,
        countItems,
        getCountItems
    }
}
