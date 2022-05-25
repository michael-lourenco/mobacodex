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
* security:
*  - auth: []
* components:
*   schemas:
*     Champion: 
*       type: object
*       title: Champion Schema
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
*       title: Champions Schema
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
*   securitySchemes:
*     auth:
*       type: http
*       scheme: bearer
*       bearerFormat: JWT
* */          
export default async function handler(req, res) {

}
