/**
* @swagger
* openapi: 3.0.0
* servers: 
*  - url: https://www.mobacodex.com/
*    description: base for mobacodex api production
*  - url: http://localhost:3000/
*    description: base for mobacodex api local
* info:
*   title: Moba Codex API
*   description: Get data about Champions and Items of LoL with Moba Codex API
*   version: "0.0.1"
*   termsOfService: https://www.mobacodex.com/terms
*   contact:
*     name: Michael Lourenço
*     email: kontempler@gmail.com
*   license:
*     name: Apache 2.0
*     url: 'http://www.apache.org/licenses/LICENSE-2.0.html'
* tags:
*   - name: Champions
*     description: champions data
*   - name: Items
*     description: items data
* paths:
*   /api/{local}/{patch}/champions:
*     parameters:
*       - in: path
*         name: local
*         description: Pass a valid local. (Example - en_US)
*         required: true
*         schema:
*           type: string
*       - in: path
*         name: patch
*         description: Pass a valid patch. (Example - 6.1.1)
*         required: true
*         schema:
*           type: string
*     get:
*       tags:
*         - Champions
*       summary: search all champions
*       operationId: searchChampions
*       description: By passing in the appropriate options, you can search and retrieve all champions in the system
*       responses:
*         '200':
*           description: search results matching criteria
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Champions'
*         '404':
*           description: bad input parameter
*           content:
*             application/json:
*               example: "Not Found"
*   /api/{local}/{patch}/champions/{id}:
*     parameters:
*       - in: path
*         name: id
*         description: Pass a valid id. (Example - Aatrox)
*         required: true
*         schema:
*           type: string
*       - in: path
*         name: local
*         description: Pass a valid local. (Example - en_US)
*         required: true
*         schema:
*           type: string
*       - in: path
*         name: patch
*         description: Pass a valid patch. (Example - 6.1.1)
*         required: true
*         schema:
*           type: string
*     get:
*       tags:
*         - Champions
*       summary: search one champion
*       operationId: searchChampion
*       description: By passing in the appropriate options, you can search and retrieve one especific champion in the system
*       responses:
*         '200':
*           description: search results matching criteria
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Champion'
*                
*                   
*         '404':
*           description: bad input parameter
*           content:
*             application/json:
*               example: "Not Found"
*   /api/{local}/{patch}/items:
*     parameters:
*       - in: path
*         name: local
*         description: Pass a valid local. (Example - en_US)
*         required: true
*         schema:
*           type: string
*       - in: path
*         name: patch
*         description: Pass a valid patch. (Example - 6.1.1)
*         required: true
*         schema:
*           type: string
*     get:
*       tags:
*         - Items
*       summary: search all items
*       operationId: searchItems
*       description: By passing in the appropriate options, you can search and retrieve all items in the system
*       responses:
*         '200':
*           description: search results matching criteria
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Items'
*         '404':
*           description: bad input parameter
*           content:
*             application/json:
*               example: "Not Found"
*   /api/{local}/{patch}/items/{id}:
*     parameters:
*       - in: path
*         name: id
*         description: Pass a valid id. (Example - 1004)
*         required: true
*         schema:
*           type: string
*       - in: path
*         name: local
*         description: Pass a valid local. (Example - en_US)
*         required: true
*         schema:
*           type: string
*       - in: path
*         name: patch
*         description: Pass a valid patch. (Example - 6.1.1)
*         required: true
*         schema:
*           type: string
*     get:
*       tags:
*         - Items
*       summary: search one item
*       operationId: searchItem
*       description: By passing in the appropriate options, you can search and retrieve one especific item in the system
*       responses:
*         '200':
*           description: search results matching criteria
*           content:
*             application/json:
*               schema:
*                 $ref: '#/components/schemas/Item'
*                
*                   
*         '404':
*           description: bad input parameter
*           content:
*             application/json:
*               example: "Not Found"
* security:
*  - auth: []
* components:
*   schemas:
*     Champion: 
*       type: object
*       title: Champion
*       description: Base Champion Schema to API
*       properties:
*         version: 
*          type: string
*         id:
*          type: string
*         key: 
*          type: string
*         name:
*          type: string
*         title: 
*          type: string
*         blurb:
*          type: string
*         info:
*          $ref: '#/components/schemas/InfoChampion'
*         image:
*          $ref: '#/components/schemas/ImageChampion'
*         tags:
*          type: array
*          items:
*           type: string
*         partype:
*          type: string
*         stats:
*          $ref: '#/components/schemas/StatsChampion'
*     ImageChampion:
*       type: object
*       title: Image Champion
*       properties:
*         full:
*          type: string                    
*         sprite:
*          type: string                    
*         group:
*          type: string                    
*         x:
*          type: number                    
*         y:
*          type: number                    
*         w:
*          type: number                    
*         h:
*          type: number 
*     InfoChampion:
*       type: object
*       title: Info Champion
*       properties:
*        attack: 
*         type: number
*        defense:
*         type: number
*        magic:
*         type: number                     
*        difficulty:
*         type: number 
*     StatsChampion:
*       type: object
*       title: Stats Champion
*       properties:
*         hp:
*          type: number                      
*         hpperlevel:
*          type: number                      
*         mp:
*          type: number                      
*         mpperlevel:
*          type: number                      
*         movespeed:
*          type: number                      
*         armor:
*          type: number                      
*         armorperlevel:
*          type: number                      
*         spellblock:
*          type: number                      
*         spellblockperlevel:
*          type: number                      
*         attackrange:
*          type: number                      
*         hpregen:
*          type: number                      
*         hpregenperlevel:
*          type: number                      
*         mpregen:
*          type: number                      
*         mpregenperlevel:
*          type: number                      
*         crit:
*          type: number                      
*         critperlevel:
*          type: number                      
*         attackdamage:
*          type: number                      
*         attackdamageperlevel:
*          type: number                      
*         attackspeedoffset:
*          type: number                      
*         attackspeedperlevel:
*          type: number  
*     Champions:
*       type: object
*       title: Champions
*       description: Base Champions Schema to API
*       properties:
*         championsData: 
*           type: object
*           properties:
*             type:
*               type: string
*             format:
*               type: string
*             version:
*               type: string
*             data:
*               type: object
*               items:
*                $ref: '#/components/schemas/Champion'
*             default:
*               type: object
*               items:
*                $ref: '#/components/schemas/Champion'  
*     Item: 
*       type: object
*       title: Item
*       description: Base Item Schema to API
*       properties:
*         name: 
*          type: string
*         rune:
*          $ref: '#/components/schemas/RuneItem'
*         group:
*          type: string
*         description: 
*          type: string
*         plaintext:
*          type: string
*         consumed:
*          type: boolean
*         stacks:
*          type: number
*         depth:
*          type: number
*         consumedOnFull:
*          type: boolean
*         from:
*          type: array
*          items:
*           type: string  
*         into: 
*          type: array
*          items:
*           type: string
*         specialRecipe:
*          type: number
*         inStore:
*          type: boolean
*         hideFromAll:
*          type: boolean
*         requiredChampion:
*          type: string
*         image:
*          $ref: '#/components/schemas/ImageItem'
*         gold:
*          $ref: '#/components/schemas/GoldItem'
*         tags:
*          type: array
*          items:
*           type: string
*         maps:
*          $ref: '#/components/schemas/MapsItem'
*         stats:
*          $ref: '#/components/schemas/StatsItem'     
*     ImageItem:
*       type: object
*       title: Image Item
*       properties:
*         full:
*          type: string                    
*         sprite:
*          type: string                    
*         group:
*          type: string                    
*         x:
*          type: number                    
*         y:
*          type: number                    
*         w:
*          type: number                    
*         h:
*          type: number     
*     GoldItem:
*       type: object
*       title: Gold Item
*       properties:
*        base: 
*         type: number
*        purchasable: 
*         type: boolean
*        total: 
*         type: number
*        sell: 
*         type: number  
*     MapsItem:
*       type: object
*       title: Maps Item
*       properties:
*        key:
*         type: boolean
*     RuneItem:
*       type: object
*       title: Rune Item
*       properties:
*        isrune: 
*         type: boolean
*        tier: 
*         type: number
*        type: 
*         type: string
*     StatsItem:
*       type: object
*       title: Stats Item
*       properties:
*         FlatHPPoolMod: 
*           type: number         
*         rFlatHPModPerLevel: 
*           type: number
*         FlatMPPoolMod: 
*           type: number
*         rFlatMPModPerLevel: 
*           type: number
*         PercentHPPoolMod: 
*           type: number
*         PercentMPPoolMod: 
*           type: number
*         FlatHPRegenMod: 
*           type: number
*         rFlatHPRegenModPerLevel: 
*           type: number
*         PercentHPRegenMod: 
*           type: number
*         FlatMPRegenMod: 
*           type: number
*         rFlatMPRegenModPerLevel: 
*           type: number
*         PercentMPRegenMod: 
*           type: number
*         FlatArmorMod: 
*           type: number
*         rFlatArmorModPerLevel: 
*           type: number
*         PercentArmorMod: 
*           type: number
*         rFlatArmorPenetrationMod: 
*           type: number
*         rFlatArmorPenetrationModPerLevel: 
*           type: number
*         rPercentArmorPenetrationMod: 
*           type: number
*         rPercentArmorPenetrationModPerLevel: 
*           type: number
*         FlatPhysicalDamageMod: 
*           type: number
*         rFlatPhysicalDamageModPerLevel: 
*           type: number
*         PercentPhysicalDamageMod: 
*           type: number
*         FlatMagicDamageMod: 
*           type: number
*         rFlatMagicDamageModPerLevel: 
*           type: number
*         PercentMagicDamageMod: 
*           type: number
*         FlatMovementSpeedMod: 
*           type: number
*         rFlatMovementSpeedModPerLevel: 
*           type: number
*         PercentMovementSpeedMod: 
*           type: number
*         rPercentMovementSpeedModPerLevel: 
*           type: number
*         FlatAttackSpeedMod: 
*           type: number
*         PercentAttackSpeedMod: 
*           type: number
*         rPercentAttackSpeedModPerLevel: 
*           type: number
*         rFlatDodgeMod: 
*           type: number
*         rFlatDodgeModPerLevel: 
*           type: number
*         PercentDodgeMod: 
*           type: number
*         FlatCritChanceMod: 
*           type: number
*         rFlatCritChanceModPerLevel: 
*           type: number
*         PercentCritChanceMod: 
*           type: number
*         FlatCritDamageMod: 
*           type: number
*         rFlatCritDamageModPerLevel: 
*           type: number
*         PercentCritDamageMod: 
*           type: number
*         FlatBlockMod: 
*           type: number
*         PercentBlockMod: 
*           type: number
*         FlatSpellBlockMod: 
*           type: number
*         rFlatSpellBlockModPerLevel: 
*           type: number
*         PercentSpellBlockMod: 
*           type: number
*         FlatEXPBonus: 
*           type: number
*         PercentEXPBonus: 
*           type: number
*         rPercentCooldownMod: 
*           type: number
*         rPercentCooldownModPerLevel: 
*           type: number
*         rFlatTimeDeadMod: 
*           type: number
*         rFlatTimeDeadModPerLevel: 
*           type: number
*         rPercentTimeDeadMod: 
*           type: number
*         rPercentTimeDeadModPerLevel: 
*           type: number
*         rFlatGoldPer10Mod: 
*           type: number
*         rFlatMagicPenetrationMod: 
*           type: number
*         rFlatMagicPenetrationModPerLevel: 
*           type: number
*         rPercentMagicPenetrationMod: 
*           type: number
*         rPercentMagicPenetrationModPerLevel: 
*           type: number
*         FlatEnergyRegenMod: 
*           type: number
*         rFlatEnergyRegenModPerLevel: 
*           type: number
*         FlatEnergyPoolMod: 
*           type: number
*         rFlatEnergyModPerLevel: 
*           type: number
*         PercentLifeStealMod: 
*           type: number
*         PercentSpellVampMod:
*           type: number
*     Items:
*       type: object
*       title: Items
*       description: Base Items Schema to API
*       properties:
*        type:
*         type: string
*        version:
*          type: string
*        basic:
*          type: object
*          items:
*           $ref: '#/components/schemas/Item'
*        data:
*          type: object
*          items:
*           $ref: '#/components/schemas/Item'
*        default:
*          type: object
*          items:
*           $ref: '#/components/schemas/Item'
*        groups:
*          type: array
*          items:
*           type: object
*           properties:
*            id:
*             type: string
*            MaxGroupOwnable:
*             type: string
*        tree:
*          type: array
*          items:
*           type: object
*           properties:
*            header:
*             type: string
*            tags:
*             type: array
*             items:
*              type: string
*   securitySchemes:
*     auth:
*       type: http
*       scheme: bearer
*       bearerFormat: JWT
* */          
export default async function handler(req, res) {

}
