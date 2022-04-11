export default class Item {
    #id: string
    #name: string
    #icon: string
    #description: string
    #plaintext: string
    #into: string[]

    constructor(name: string, id: string = null, icon: string = null, description: string = null, plaintext: string = null, into: string[] = []) {
        this.#name = name
        this.#id = id
        this.#icon = icon
        this.#description = description
        this.#plaintext = plaintext
        this.#into = into
    }

    static clientEmpty() { return new Item('') }

    get id() { return this.#id }

    get name() { return this.#name }
    
    get icon() { return this.#icon }
    
    get description() { return this.#description }

    get plaintext() { return this.#plaintext }

    get into() { return this.#into }

}
