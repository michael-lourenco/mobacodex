import Localization from "../../core/Localization";
import LocalizationRepository from "../../core/LocalizationRepository";

export default class LocalizationCollection implements LocalizationRepository {
    async save(localization: Localization): Promise<Localization>{
        if(localization?.id) {
            console.log('alterou localization');
            return localization
        } else {
            console.log('salvou localization');
            return localization
        }
    }

    async delete(localization: Localization): Promise<void>{
        console.log('excluiu localization');
        return 
    }

    async getAll(): Promise<Localization[]> {
        const localizationsData = await import("../data/languages.json")

        const allLocalizations = Object.values(JSON.parse(JSON.stringify(localizationsData))).map((localization, i) => {
            const novaLocalization = new Localization (localization.toString());
            return novaLocalization
        });     

        allLocalizations.splice(allLocalizations.length-2, 2) // retirando default e object lenght, que são os dois ultimos itens

        return allLocalizations
    }

}
