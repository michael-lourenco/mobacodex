import Localization from './Localization'

export default interface LocalizationRepository {
    save(localization: Localization): Promise<Localization>
    delete(localization: Localization): Promise<void>
    getAll(): Promise<Localization[]>
}
