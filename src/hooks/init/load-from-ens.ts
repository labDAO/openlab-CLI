import {Hook} from '@oclif/core'
import getLabDAOCID from '../../utils/ens'
import axios from 'axios'
import userConfig from '../../config'

const hook: Hook<'init'> = async function () {
  const cid = getLabDAOCID()
  const configURI = `https://${cid}.ipfs.dweb.link`
  const res = await axios.get(configURI)
  const config = res.data
  userConfig.set('latest', config)
  this.log(`Verified latest config from labdao.eth`)
}

export default hook
