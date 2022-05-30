// export default async function handler(req, res) {
//     const { local, patch } = req.query
//     const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)
//     res.status(200).json(championsData)
//   }

import { NextApiRequest, NextApiResponse } from 'next';
//const { promises: fs } = require('fs')
const fs = require('fs')
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
    // const content = fs.readFileSync(require('path').resolve(url), 'utf8')
    // const contentJson = JSON.parse(content)
    // console.log('CONTENT', contentJson)
    fs.readFile(`./src/backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`,
        {encoding:'utf8', flag:'r'},
        function(err, data) {
      if(err){
        console.log('DEU RUIM', err);
        res.status(400).json({
          message: 'Cannot find this data'
        })
      }
      else{
        const championsData = JSON.parse(data)
        console.log(championsData);
        res.status(200).json({
          url,
          absoluteUrl: require('path').resolve(url),
          championsData
        })
      }
    });
    // if(!await existsPath(url)){
    //   console.log("Directory does not exist.", )
    //   res.status(200).json({
    //     url,
    //     absoluteUrl: require('path').resolve(url),
    //   })
    // } else {  
    //console.log("Directory exists.")
    //const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)

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
