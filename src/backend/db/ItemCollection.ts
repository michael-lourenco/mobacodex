import Item from "../../core/Item";
import ItemRepository from "../../core/ItemRepository";

export default class ItemCollection implements ItemRepository {
    async save(item: Item): Promise<Item>{
        if(item?.id) {
            console.log('alterou item');
            return item
        } else {
            console.log('salvou item');
            return item
        }
    }

    async delete(item: Item): Promise<void>{
        console.log('excluiu item');
        return 
    }

    async getAll(patch: string, localization: string): Promise<Item[]> {
        const response = await fetch(`/api/${localization}/${patch}/items`)
        
        const { data } = await response.json()
        console.log('RESPONSE ', JSON.stringify(data))
        const allItems: Item[] = Object.entries(JSON.parse(JSON.stringify(data))).map(item => {
            const [id, itemData] = item
                return new Item (
                    itemData["name"], 
                    id, 
                    itemData["image"].full,
                    itemData["description"], 
                    itemData["plaintext"], 
                    itemData["into"], 
                )
        });
        
        return allItems
    }

    async getItem(patch: string, localization: string, id: string): Promise<Item> {
        const response = await fetch(`/api/${localization}/${patch}/items/${id}`)
        const { name, image, description, plaintext, into } = await response.json()
        return new Item (
            name, 
            id, 
            image.full,
            description, 
            plaintext, 
            into, 
         )
    }

    async getCount(patch: string, localization: string): Promise<number> {
        console.time()
        const redisResponse = await fetch(`/api/redis/items:quantity:${patch}:${localization}`)
       
        const valor = await redisResponse.json()
        
        if(valor.data && valor.data !== null && valor.data !== undefined && valor.data !== '') {
            console.log('JA EXISTE REDIS', valor.data )
            console.timeEnd()
            return valor.data
        }

        const response = await fetch(`/api/${localization}/${patch}/items`)
        
        const itemsData = await response.json()

        const quantity = Object.keys(itemsData.data).length;        

        const data = {
            key: `items:quantity:${patch}:${localization}`, 
            value: quantity
        }

        console.log('CRIANDO CHAVE REDIS', data);

        await fetch(
            `/api/redis/`,
            {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(data),
          }
        )

        console.timeEnd()

        return quantity
    }

}
