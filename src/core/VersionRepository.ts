import Version from './Version'

export default interface VersionRepository {
    save(version: Version): Promise<Version>
    delete(version: Version): Promise<void>
    getAll(patch): Promise<Version[]>
}
