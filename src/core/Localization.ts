export default class Localization {
    #id: string

    constructor(id: string) {
        this.#id = id
    }

    static clientEmpty() { return new Localization('') }

    get id() { return this.#id }

    set id(localization) {
        this.#id = localization;
    }

}
