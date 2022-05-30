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
