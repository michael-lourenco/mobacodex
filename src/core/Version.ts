export default class Version {
    #id: string

    constructor(id: string) {
        this.#id = id
    }

    static clientEmpty() { return new Version('') }

    get id() { return this.#id }

}
