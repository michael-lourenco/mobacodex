// export default async function handler(req, res) {
//     const { local, patch } = req.query
//     const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)
//     res.status(200).json(championsData)
//   }
  

  const { promises: fs } = require('fs')
var path = require("path");

async function existsPath (directory) { 
 try {
  await fs.access(directory)
  return true
 } catch {
  return false
 }
}

export default async function handler(req, res) {
  try{
    const { local, patch } = req.query

    const url= `../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`
    console.log('URL SEARCHED', url)
    // if(!await existsPath(url)){
    //   console.log("Directory does not exist.")
    //   res.status(200).json({})
    // } else {  
      console.log("Directory exists.")
      const championsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/champion.json`)
      res.status(200).json(championsData)
    //}
  }catch(error){
    console.log(error)
  }
}

