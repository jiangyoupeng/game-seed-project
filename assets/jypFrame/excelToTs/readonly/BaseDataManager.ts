//该文件为代码生成替换,请勿修改(每次执行命令会被替换)
import { TerrainDataNameMapping } from '../overwrite/TerrainDataNameMapping'
import { TerrainData } from '../overwrite/TerrainData'
import { StrategyLearnData } from '../overwrite/StrategyLearnData'
import { StrategyData } from '../overwrite/StrategyData'
import { RoleData } from '../overwrite/RoleData'
import { RangeTable } from '../overwrite/RangeTable'
import { ProfessionData } from '../overwrite/ProfessionData'
import { FightAIData } from '../overwrite/FightAIData'
import { EquipmentData } from '../overwrite/EquipmentData'
import { ConsumableData } from '../overwrite/ConsumableData'
import { CheckPointData } from '../overwrite/CheckPointData'
import { AttackFightFactor } from '../overwrite/AttackFightFactor'
import { ArmRelationOfTerrain } from '../overwrite/ArmRelationOfTerrain'
import { ArmData } from '../overwrite/ArmData'
import { loader, JsonAsset } from "cc"
import { Refrence } from './Refrence'
export class BaseDataManager {
    ArmData: {[key: string]: ArmData} = {}
    ArmRelationOfTerrain: {[key: string]: ArmRelationOfTerrain} = {}
    AttackFightFactor: {[key: string]: AttackFightFactor} = {}
    CheckPointData: {[key: string]: CheckPointData} = {}
    ConsumableData: {[key: string]: ConsumableData} = {}
    EquipmentData: {[key: string]: EquipmentData} = {}
    FightAIData: {[key: string]: FightAIData} = {}
    ProfessionData: {[key: string]: ProfessionData} = {}
    RangeTable: {[key: string]: RangeTable} = {}
    RoleData: {[key: string]: RoleData} = {}
    StrategyData: {[key: string]: StrategyData} = {}
    StrategyLearnData: {[key: string]: StrategyLearnData} = {}
    TerrainData: {[key: string]: TerrainData} = {}
    TerrainDataNameMapping: {[key: string]: TerrainDataNameMapping} = {}
    private _init: boolean = false
    /**
     * 加载完成数据后的回调
     * @param overFunc
     */
    init(overFunc: Function) {
        if (!this._init) {
            this._init = true

            loader.loadRes("excelData/excelData.json", JsonAsset, (err: any, data: JsonAsset) => {
                if (err) {
                    this._init = false
                    console.error(err)
                } else {
                    this._doInitData(data.json)
                }
                if (overFunc) {
                    overFunc(err, this)
                }
            })
        }
    }

    private _doInitData(jsonData: any) {
        let beginTime = Date.now()
        for (const tablleName in jsonData) {
            const originTableData = jsonData[tablleName]
            let settingTableData = this[tablleName]
            if (!settingTableData) {
                console.error("error!!! not has tablleName " + tablleName)
                break
            }

            for (let i = 0; i < originTableData.values.length; i++) {
                let valueDatas = originTableData.values[i]
                let data = new Refrence[tablleName]()
                for (let index = 0; index < valueDatas.length; index++) {
                    const element = valueDatas[index]
                    let key = originTableData.keys[index]
                    if (data[key] === undefined) {
                        console.error("error!!! not has key " + key)
                        break
                    }
                    data[key] = element
                }
                settingTableData[originTableData.ids[i]] = data
            }
        }

        // 查找外键
        for (const tablleName in jsonData) {
            const originTableData = jsonData[tablleName]
            let settingTableData = this[tablleName]
            if (!settingTableData) {
                console.error("error!!! not has tablleName " + tablleName)
                break
            }

            for (const key in originTableData.foreign) {
                const foreignSearchData = originTableData.foreign[key]
                let table = this[foreignSearchData.dataType]
                // 只能通过主键来查找
                for (const itemKey in settingTableData) {
                    const data = settingTableData[itemKey]
                    if (data !== null) {
                        let attritubeData = data[key]
                        let foreignData = null
                        if (attritubeData !== null && attritubeData !== "") {
                            if (Array.isArray(attritubeData)) {
                                foreignData = []
                                for (let index = 0; index < attritubeData.length; index++) {
                                    const element = attritubeData[index]
                                    if (element !== null && element !== "") {
                                        let searchData = table[element]
                                        if (searchData === undefined) {
                                            console.error("error!!! get data by key " + element)
                                            console.error(data)
                                        }
                                        foreignData.push(searchData)
                                    }
                                }
                            } else {
                                let searchData = table[attritubeData]
                                if (searchData === undefined) {
                                    console.error("error!!! get data by key " + attritubeData)
                                    console.error(data)
                                }
                                foreignData = searchData
                            }
                        }
                        data[key] = foreignData
                    }
                }
            }
        }
        // 组装数据
        console.log("data combination cost time " + (Date.now() - beginTime))
    }
}
