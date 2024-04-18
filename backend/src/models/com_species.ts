import * as Sequelize from 'sequelize'
import { DataTypes, Model, Optional } from 'sequelize'
import type { now_loc, now_locId } from './now_loc'
import type { now_ls, now_lsId } from './now_ls'
import type { now_proj, now_projId } from './now_proj'
import type { now_psr, now_psrId } from './now_psr'
import type { now_sau, now_sauId } from './now_sau'

export interface com_speciesAttributes {
  species_id: number
  class_name: string
  order_name: string
  family_name: string
  subclass_or_superorder_name?: string
  suborder_or_superfamily_name?: string
  subfamily_name?: string
  genus_name: string
  species_name: string
  unique_identifier: string
  taxonomic_status?: string
  common_name?: string
  sp_author?: string
  strain?: string
  gene?: string
  taxon_status?: string
  diet1?: string
  diet2?: string
  diet3?: string
  diet_description?: string
  rel_fib?: string
  selectivity?: string
  digestion?: string
  feedinghab1?: string
  feedinghab2?: string
  shelterhab1?: string
  shelterhab2?: string
  locomo1?: string
  locomo2?: string
  locomo3?: string
  hunt_forage?: string
  body_mass?: number
  brain_mass?: number
  sv_length?: string
  activity?: string
  sd_size?: string
  sd_display?: string
  tshm?: string
  symph_mob?: string
  relative_blade_length?: number
  tht?: string
  crowntype?: string
  microwear?: string
  horizodonty?: string
  cusp_shape?: string
  cusp_count_buccal?: string
  cusp_count_lingual?: string
  loph_count_lon?: string
  loph_count_trs?: string
  fct_al?: string
  fct_ol?: string
  fct_sf?: string
  fct_ot?: string
  fct_cm?: string
  mesowear?: string
  mw_or_high?: number
  mw_or_low?: number
  mw_cs_sharp?: number
  mw_cs_round?: number
  mw_cs_blunt?: number
  mw_scale_min?: number
  mw_scale_max?: number
  mw_value?: number
  pop_struc?: string
  sp_status?: number
  used_morph?: number
  used_now?: number
  used_gene?: number
  sp_comment?: string
}

export type com_speciesPk = 'species_id'
export type com_speciesId = com_species[com_speciesPk]
export type com_speciesOptionalAttributes =
  | 'species_id'
  | 'class_name'
  | 'order_name'
  | 'family_name'
  | 'subclass_or_superorder_name'
  | 'suborder_or_superfamily_name'
  | 'subfamily_name'
  | 'genus_name'
  | 'species_name'
  | 'unique_identifier'
  | 'taxonomic_status'
  | 'common_name'
  | 'sp_author'
  | 'strain'
  | 'gene'
  | 'taxon_status'
  | 'diet1'
  | 'diet2'
  | 'diet3'
  | 'diet_description'
  | 'rel_fib'
  | 'selectivity'
  | 'digestion'
  | 'feedinghab1'
  | 'feedinghab2'
  | 'shelterhab1'
  | 'shelterhab2'
  | 'locomo1'
  | 'locomo2'
  | 'locomo3'
  | 'hunt_forage'
  | 'body_mass'
  | 'brain_mass'
  | 'sv_length'
  | 'activity'
  | 'sd_size'
  | 'sd_display'
  | 'tshm'
  | 'symph_mob'
  | 'relative_blade_length'
  | 'tht'
  | 'crowntype'
  | 'microwear'
  | 'horizodonty'
  | 'cusp_shape'
  | 'cusp_count_buccal'
  | 'cusp_count_lingual'
  | 'loph_count_lon'
  | 'loph_count_trs'
  | 'fct_al'
  | 'fct_ol'
  | 'fct_sf'
  | 'fct_ot'
  | 'fct_cm'
  | 'mesowear'
  | 'mw_or_high'
  | 'mw_or_low'
  | 'mw_cs_sharp'
  | 'mw_cs_round'
  | 'mw_cs_blunt'
  | 'mw_scale_min'
  | 'mw_scale_max'
  | 'mw_value'
  | 'pop_struc'
  | 'sp_status'
  | 'used_morph'
  | 'used_now'
  | 'used_gene'
  | 'sp_comment'
export type com_speciesCreationAttributes = Optional<com_speciesAttributes, com_speciesOptionalAttributes>

export class com_species
  extends Model<com_speciesAttributes, com_speciesCreationAttributes>
  implements com_speciesAttributes
{
  species_id!: number
  class_name!: string
  order_name!: string
  family_name!: string
  subclass_or_superorder_name?: string
  suborder_or_superfamily_name?: string
  subfamily_name?: string
  genus_name!: string
  species_name!: string
  unique_identifier!: string
  taxonomic_status?: string
  common_name?: string
  sp_author?: string
  strain?: string
  gene?: string
  taxon_status?: string
  diet1?: string
  diet2?: string
  diet3?: string
  diet_description?: string
  rel_fib?: string
  selectivity?: string
  digestion?: string
  feedinghab1?: string
  feedinghab2?: string
  shelterhab1?: string
  shelterhab2?: string
  locomo1?: string
  locomo2?: string
  locomo3?: string
  hunt_forage?: string
  body_mass?: number
  brain_mass?: number
  sv_length?: string
  activity?: string
  sd_size?: string
  sd_display?: string
  tshm?: string
  symph_mob?: string
  relative_blade_length?: number
  tht?: string
  crowntype?: string
  microwear?: string
  horizodonty?: string
  cusp_shape?: string
  cusp_count_buccal?: string
  cusp_count_lingual?: string
  loph_count_lon?: string
  loph_count_trs?: string
  fct_al?: string
  fct_ol?: string
  fct_sf?: string
  fct_ot?: string
  fct_cm?: string
  mesowear?: string
  mw_or_high?: number
  mw_or_low?: number
  mw_cs_sharp?: number
  mw_cs_round?: number
  mw_cs_blunt?: number
  mw_scale_min?: number
  mw_scale_max?: number
  mw_value?: number
  pop_struc?: string
  sp_status?: number
  used_morph?: number
  used_now?: number
  used_gene?: number
  sp_comment?: string

  // com_species belongsToMany now_loc via species_id and lid
  lid_now_locs!: now_loc[]
  getLid_now_locs!: Sequelize.BelongsToManyGetAssociationsMixin<now_loc>
  setLid_now_locs!: Sequelize.BelongsToManySetAssociationsMixin<now_loc, now_locId>
  addLid_now_loc!: Sequelize.BelongsToManyAddAssociationMixin<now_loc, now_locId>
  addLid_now_locs!: Sequelize.BelongsToManyAddAssociationsMixin<now_loc, now_locId>
  createLid_now_loc!: Sequelize.BelongsToManyCreateAssociationMixin<now_loc>
  removeLid_now_loc!: Sequelize.BelongsToManyRemoveAssociationMixin<now_loc, now_locId>
  removeLid_now_locs!: Sequelize.BelongsToManyRemoveAssociationsMixin<now_loc, now_locId>
  hasLid_now_loc!: Sequelize.BelongsToManyHasAssociationMixin<now_loc, now_locId>
  hasLid_now_locs!: Sequelize.BelongsToManyHasAssociationsMixin<now_loc, now_locId>
  countLid_now_locs!: Sequelize.BelongsToManyCountAssociationsMixin
  // com_species hasMany now_ls via species_id
  now_ls!: now_ls[]
  getNow_ls!: Sequelize.HasManyGetAssociationsMixin<now_ls>
  setNow_ls!: Sequelize.HasManySetAssociationsMixin<now_ls, now_lsId>
  addNow_l!: Sequelize.HasManyAddAssociationMixin<now_ls, now_lsId>
  addNow_ls!: Sequelize.HasManyAddAssociationsMixin<now_ls, now_lsId>
  createNow_l!: Sequelize.HasManyCreateAssociationMixin<now_ls>
  removeNow_l!: Sequelize.HasManyRemoveAssociationMixin<now_ls, now_lsId>
  removeNow_ls!: Sequelize.HasManyRemoveAssociationsMixin<now_ls, now_lsId>
  hasNow_l!: Sequelize.HasManyHasAssociationMixin<now_ls, now_lsId>
  hasNow_ls!: Sequelize.HasManyHasAssociationsMixin<now_ls, now_lsId>
  countNow_ls!: Sequelize.HasManyCountAssociationsMixin
  // com_species belongsToMany now_proj via species_id and pid
  pid_now_proj_now_psrs!: now_proj[]
  getPid_now_proj_now_psrs!: Sequelize.BelongsToManyGetAssociationsMixin<now_proj>
  setPid_now_proj_now_psrs!: Sequelize.BelongsToManySetAssociationsMixin<now_proj, now_projId>
  addPid_now_proj_now_psr!: Sequelize.BelongsToManyAddAssociationMixin<now_proj, now_projId>
  addPid_now_proj_now_psrs!: Sequelize.BelongsToManyAddAssociationsMixin<now_proj, now_projId>
  createPid_now_proj_now_psr!: Sequelize.BelongsToManyCreateAssociationMixin<now_proj>
  removePid_now_proj_now_psr!: Sequelize.BelongsToManyRemoveAssociationMixin<now_proj, now_projId>
  removePid_now_proj_now_psrs!: Sequelize.BelongsToManyRemoveAssociationsMixin<now_proj, now_projId>
  hasPid_now_proj_now_psr!: Sequelize.BelongsToManyHasAssociationMixin<now_proj, now_projId>
  hasPid_now_proj_now_psrs!: Sequelize.BelongsToManyHasAssociationsMixin<now_proj, now_projId>
  countPid_now_proj_now_psrs!: Sequelize.BelongsToManyCountAssociationsMixin
  // com_species hasMany now_psr via species_id
  now_psrs!: now_psr[]
  getNow_psrs!: Sequelize.HasManyGetAssociationsMixin<now_psr>
  setNow_psrs!: Sequelize.HasManySetAssociationsMixin<now_psr, now_psrId>
  addNow_psr!: Sequelize.HasManyAddAssociationMixin<now_psr, now_psrId>
  addNow_psrs!: Sequelize.HasManyAddAssociationsMixin<now_psr, now_psrId>
  createNow_psr!: Sequelize.HasManyCreateAssociationMixin<now_psr>
  removeNow_psr!: Sequelize.HasManyRemoveAssociationMixin<now_psr, now_psrId>
  removeNow_psrs!: Sequelize.HasManyRemoveAssociationsMixin<now_psr, now_psrId>
  hasNow_psr!: Sequelize.HasManyHasAssociationMixin<now_psr, now_psrId>
  hasNow_psrs!: Sequelize.HasManyHasAssociationsMixin<now_psr, now_psrId>
  countNow_psrs!: Sequelize.HasManyCountAssociationsMixin
  // com_species hasMany now_sau via species_id
  now_saus!: now_sau[]
  getNow_saus!: Sequelize.HasManyGetAssociationsMixin<now_sau>
  setNow_saus!: Sequelize.HasManySetAssociationsMixin<now_sau, now_sauId>
  addNow_sau!: Sequelize.HasManyAddAssociationMixin<now_sau, now_sauId>
  addNow_saus!: Sequelize.HasManyAddAssociationsMixin<now_sau, now_sauId>
  createNow_sau!: Sequelize.HasManyCreateAssociationMixin<now_sau>
  removeNow_sau!: Sequelize.HasManyRemoveAssociationMixin<now_sau, now_sauId>
  removeNow_saus!: Sequelize.HasManyRemoveAssociationsMixin<now_sau, now_sauId>
  hasNow_sau!: Sequelize.HasManyHasAssociationMixin<now_sau, now_sauId>
  hasNow_saus!: Sequelize.HasManyHasAssociationsMixin<now_sau, now_sauId>
  countNow_saus!: Sequelize.HasManyCountAssociationsMixin

  static initModel(sequelize: Sequelize.Sequelize): typeof com_species {
    return com_species.init(
      {
        species_id: {
          autoIncrement: true,
          type: DataTypes.INTEGER,
          allowNull: false,
          primaryKey: true,
        },
        class_name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          defaultValue: '',
        },
        order_name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          defaultValue: '',
        },
        family_name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          defaultValue: '',
        },
        subclass_or_superorder_name: {
          type: DataTypes.STRING(30),
          allowNull: true,
          defaultValue: '',
        },
        suborder_or_superfamily_name: {
          type: DataTypes.STRING(30),
          allowNull: true,
          defaultValue: '',
        },
        subfamily_name: {
          type: DataTypes.STRING(30),
          allowNull: true,
          defaultValue: '',
        },
        genus_name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          defaultValue: '',
        },
        species_name: {
          type: DataTypes.STRING(30),
          allowNull: false,
          defaultValue: '',
        },
        unique_identifier: {
          type: DataTypes.STRING(50),
          allowNull: false,
          defaultValue: '',
        },
        taxonomic_status: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        common_name: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        sp_author: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        strain: {
          type: DataTypes.STRING(50),
          allowNull: true,
        },
        gene: {
          type: DataTypes.STRING(30),
          allowNull: true,
        },
        taxon_status: {
          type: DataTypes.STRING(10),
          allowNull: true,
        },
        diet1: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        diet2: {
          type: DataTypes.STRING(9),
          allowNull: true,
        },
        diet3: {
          type: DataTypes.STRING(10),
          allowNull: true,
        },
        diet_description: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
        rel_fib: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        selectivity: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        digestion: {
          type: DataTypes.STRING(2),
          allowNull: true,
        },
        feedinghab1: {
          type: DataTypes.STRING(2),
          allowNull: true,
        },
        feedinghab2: {
          type: DataTypes.STRING(8),
          allowNull: true,
        },
        shelterhab1: {
          type: DataTypes.STRING(2),
          allowNull: true,
        },
        shelterhab2: {
          type: DataTypes.STRING(8),
          allowNull: true,
        },
        locomo1: {
          type: DataTypes.STRING(2),
          allowNull: true,
        },
        locomo2: {
          type: DataTypes.STRING(15),
          allowNull: true,
        },
        locomo3: {
          type: DataTypes.STRING(15),
          allowNull: true,
        },
        hunt_forage: {
          type: DataTypes.STRING(8),
          allowNull: true,
        },
        body_mass: {
          type: DataTypes.BIGINT,
          allowNull: true,
        },
        brain_mass: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        sv_length: {
          type: DataTypes.STRING(7),
          allowNull: true,
        },
        activity: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        sd_size: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        sd_display: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        tshm: {
          type: DataTypes.STRING(3),
          allowNull: true,
        },
        symph_mob: {
          type: DataTypes.STRING(1),
          allowNull: true,
        },
        relative_blade_length: {
          type: DataTypes.DOUBLE,
          allowNull: true,
        },
        tht: {
          type: DataTypes.STRING(3),
          allowNull: true,
        },
        crowntype: {
          type: DataTypes.STRING(6),
          allowNull: true,
        },
        microwear: {
          type: DataTypes.STRING(7),
          allowNull: true,
        },
        horizodonty: {
          type: DataTypes.CHAR(3),
          allowNull: true,
        },
        cusp_shape: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        cusp_count_buccal: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        cusp_count_lingual: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        loph_count_lon: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        loph_count_trs: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        fct_al: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        fct_ol: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        fct_sf: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        fct_ot: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        fct_cm: {
          type: DataTypes.CHAR(1),
          allowNull: true,
        },
        mesowear: {
          type: DataTypes.CHAR(3),
          allowNull: true,
        },
        mw_or_high: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        mw_or_low: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        mw_cs_sharp: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        mw_cs_round: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        mw_cs_blunt: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        mw_scale_min: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        mw_scale_max: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        mw_value: {
          type: DataTypes.INTEGER,
          allowNull: true,
        },
        pop_struc: {
          type: DataTypes.STRING(3),
          allowNull: true,
        },
        sp_status: {
          type: DataTypes.BOOLEAN,
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
        sp_comment: {
          type: DataTypes.STRING(255),
          allowNull: true,
        },
      },
      {
        sequelize,
        tableName: 'com_species',
        timestamps: false,
        indexes: [
          {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: [{ name: 'species_id' }],
          },
        ],
      }
    )
  }
}
