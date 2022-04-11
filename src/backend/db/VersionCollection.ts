import Version from "../../core/Version";
import VersionRepository from "../../core/VersionRepository";

export default class VersionCollection implements VersionRepository {
    async save(version: Version): Promise<Version>{
        if(version?.id) {
            console.log('alterou version');
            return version
        } else {
            console.log('salvou version');
            return version
        }
    }

    async delete(version: Version): Promise<void>{
        console.log('excluiu version');
        return 
    }

    async getAll(): Promise<Version[]> {
        const versionsData = await import("../data/versions.json")

        const allVersions = Object.values(JSON.parse(JSON.stringify(versionsData))).map((version, i) => {
            const newVersion = new Version (version.toString());
            return newVersion
        });     

        allVersions.splice(allVersions.length-2, 2) // retirando default e object lenght, que são os dois ultimos itens

        return allVersions
    }

}
