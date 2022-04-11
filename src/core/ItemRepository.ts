import Item from './Item'

export default interface ItemRepository {
    save(item: Item): Promise<Item>
    delete(item: Item): Promise<void>
    getItem(patch: string, localization: string, id: string): Promise<Item>
    getAll(patch: string, localization: string): Promise<Item[]>
    getCount(patch: string, localization: string):  Promise<number>
}
