// export default async function handler(req, res) {
//     const { local, patch } = req.query
//     const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)
//     res.status(200).json(championsData)
//   }

import { NextApiRequest, NextApiResponse } from 'next';
const { promises: fs } = require('fs')
var path = require("path");

async function existsPath(directory) {
  try {
    await fs.access(directory)
    return true
  } catch {
    return false
  }
}

/**
*   @swagger
*  /api/{local}/{patch}/champions:
*    parameters:
*      - in: path
*        name: local
*        description: pass an required search string for looking up champions
*        required: true
*        schema:
*          type: string
*      - in: path
*        name: patch
*        description: pass an required search string for looking up champions
*        required: true
*        schema:
*          type: string
*    get:
*      tags:
*        - developers
*      summary: searches champions
*      operationId: searchChampions
*      description: By passing in the appropriate options, you can search for
*        available champions in the system
*      responses:
*        '200':
*          description: search results matching criteria
*          content:
*            application/json:
*              schema:
*                $ref: '#/components/schemas/Champions'
*        '404':
*          description: bad input parameter
*          content:
*            application/json:
*              example: "Not Found"
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
*/             
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
 try {
   const { local, patch } = req.query

   const url = `./src/backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`
    console.log('URL SEARCHED', url)

    console.log('URL ABSOLUTE', require('path').resolve(url))
    // if(!await existsPath(url)){
    //   console.log("Directory does not exist.", )
    //   res.status(200).json({
    //     url,
    //     absoluteUrl: require('path').resolve(url),
    //   })
    // } else {  
    console.log("Directory exists.")
    const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)
    res.status(200).json({
      url,
      absoluteUrl: require('path').resolve(url),
      championsData
    })
    //}
  } catch (error) {
    if (error.message.includes('Cannot find module')) {
      res.status(500).json({
        error: 'Internal server error',
        message: 'Cannot find this data'
      })
    } else {
      res.status(500).json({
        error: 'Internal server error',
        message: error.message
      })
    }
  }
}
