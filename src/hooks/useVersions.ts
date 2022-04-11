import Version from '../core/Version'
import { useEffect, useState } from 'react'
import VersionRepository from '../core/VersionRepository'
import VersionCollection from '../backend/db/VersionCollection'

export default function useVersions() {
    const repo: VersionRepository = new VersionCollection()
    const [version,setVersion] = useState<string>('7.1.1')
    const [versions,setVersions] = useState<Version[]>([])
  
    useEffect(getAll,[])
  
    function getAll() { 
      repo.getAll(version).then(versions => {
        setVersions(versions)
      })
    }
  
    function selectVersion(version:string) {
      setVersion(version)
    }

    return { 
        version,
        versions,
        selectVersion,
        getAll,
    }
}
