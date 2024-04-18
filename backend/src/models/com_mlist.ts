import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { now_loc, now_locId } from './now_loc'
import type { now_mus, now_musId } from './now_mus'

export interface com_mlistAttributes {
  museum: string
  institution: string
  alt_int_name?: string
  city?: string
  state_code?: string
  state?: string
  country?: string
  used_morph?: number
  used_now?: number
  used_gene?: number
}

export type com_mlistPk = 'museum'
export type com_mlistId = com_mlist[com_mlistPk]
export type com_mlistOptionalAttributes =
  | 'museum'
  | 'institution'
  | 'alt_int_name'
  | 'city'
  | 'state_code'
  | 'state'
  | 'country'
  | 'used_morph'
  | 'used_now'
  | 'used_gene'
export type com_mlistCreationAttributes = Optional<com_mlistAttributes, com_mlistOptionalAttributes>

export class com_mlist extends Model<com_mlistAttributes, com_mlistCreationAttributes> implements com_mlistAttributes {
  museum!: string
  institution!: string
  alt_int_name?: string
  city?: string
  state_code?: string
  state?: string
  country?: string
  used_morph?: number
  used_now?: number
  used_gene?: number

  // com_mlist belongsToMany now_loc via museum and lid
  lid_now_loc_now_mus!: now_loc[]
  getLid_now_loc_now_mus!: Sequelize.BelongsToManyGetAssociationsMixin<now_loc>
  setLid_now_loc_now_mus!: Sequelize.BelongsToManySetAssociationsMixin<now_loc, now_locId>
  addLid_now_loc_now_mu!: Sequelize.BelongsToManyAddAssociationMixin<now_loc, now_locId>
  addLid_now_loc_now_mus!: Sequelize.BelongsToManyAddAssociationsMixin<now_loc, now_locId>
  createLid_now_loc_now_mu!: Sequelize.BelongsToManyCreateAssociationMixin<now_loc>
  removeLid_now_loc_now_mu!: Sequelize.BelongsToManyRemoveAssociationMixin<now_loc, now_locId>
  removeLid_now_loc_now_mus!: Sequelize.BelongsToManyRemoveAssociationsMixin<now_loc, now_locId>
  hasLid_now_loc_now_mu!: Sequelize.BelongsToManyHasAssociationMixin<now_loc, now_locId>
  hasLid_now_loc_now_mus!: Sequelize.BelongsToManyHasAssociationsMixin<now_loc, now_locId>
  countLid_now_loc_now_mus!: Sequelize.BelongsToManyCountAssociationsMixin
  // com_mlist hasMany now_mus via museum
  now_mus!: now_mus[]
  getNow_mus!: Sequelize.HasManyGetAssociationsMixin<now_mus>
  setNow_mus!: Sequelize.HasManySetAssociationsMixin<now_mus, now_musId>
  addNow_mu!: Sequelize.HasManyAddAssociationMixin<now_mus, now_musId>
  addNow_mus!: Sequelize.HasManyAddAssociationsMixin<now_mus, now_musId>
  createNow_mu!: Sequelize.HasManyCreateAssociationMixin<now_mus>
  removeNow_mu!: Sequelize.HasManyRemoveAssociationMixin<now_mus, now_musId>
  removeNow_mus!: Sequelize.HasManyRemoveAssociationsMixin<now_mus, now_musId>
  hasNow_mu!: Sequelize.HasManyHasAssociationMixin<now_mus, now_musId>
  hasNow_mus!: Sequelize.HasManyHasAssociationsMixin<now_mus, now_musId>
  countNow_mus!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof com_mlist {
    return com_mlist.init(
      {
        museum: {
          type: DataTypes.STRING(10),
          allowNull: false,
          defaultValue: '',
          primaryKey: true,
        },
        institution: {
          type: DataTypes.STRING(120),
          allowNull: false,
          defaultValue: '',
        },
        alt_int_name: {
          type: DataTypes.STRING(120),
          allowNull: true,
        },
        city: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        state_code: {
          type: DataTypes.STRING(5),
          allowNull: true,
        },
        state: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        country: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        used_morph: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        used_now: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
        used_gene: {
          type: DataTypes.BOOLEAN,
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'com_mlist',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'museum' }],
          },
        ],
      }
    )
  }
}
