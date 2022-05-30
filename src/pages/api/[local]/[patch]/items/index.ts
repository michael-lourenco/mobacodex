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

export default async function handler(req, res) {
  try {
    const { local, patch } = req.query
    // const url = `${process.env.DRAGONTAIL_URL}/dragontail-${patch}/${patch}/data/${local}/item.json`
    // console.log('URL SEARCHED', url)
    // if(!await existsPath(url)){
    //   console.log("Directory does not exist.")
    //   res.status(200).json({})
    // } else {  
    // console.log("Directory exists.")
    const itemsData = await import(`../../../../../backend/data/dragontail/dragontail-${patch}/${patch}/data/${local}/item.json`)
    res.status(200).json(itemsData)
    //
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
