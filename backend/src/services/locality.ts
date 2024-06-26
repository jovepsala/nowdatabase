import { com_mlist } from '../models/com_mlist'
import { models } from '../utils/db'
import { logger } from '../utils/logger'

export const testDb = async () => {
  const result = await models.now_loc.findAll({ attributes: ['loc_name'], where: { loc_name: 'Amba East' }, raw: true })
  if (result[0].loc_name === 'Amba East') {
    logger.info('Database connection tested, data can be fetched')
  } else {
    logger.error('Database connection does not work')
  }
}

export const getAllLocalities = async (onlyPublic: boolean) => {
  const where = onlyPublic ? { loc_status: 0 } : {}

  const result = await models.now_loc.findAll({
    attributes: ['lid', 'loc_name', 'max_age', 'min_age', 'country', 'loc_status'],
    where,
  })
  return result
}

export const getLocalityDetails = async (id: number) => {
  // TODO: Check if user has access
  const result = await models.now_loc.findByPk(id, { include: { model: com_mlist, as: 'museum_com_mlists' } })
  return result
}
