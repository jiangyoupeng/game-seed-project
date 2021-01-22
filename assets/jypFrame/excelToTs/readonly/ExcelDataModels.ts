//该文件为代码生成替换,请勿修改(每次执行命令会被替换)
export class BaseArmData {
    get uniqueKeyData() {
        return this.armName
    }
    static readonly uniqueKeyName: string = 'armName'
    /**
    * 标识(名称)
    * @memberof BaseArmData
    */
    readonly armName: string = null
    readonly type: number = null
    readonly equipmentAdaptId: string = null
    /**
    * 攻击力
    * @memberof BaseArmData
    */
    readonly Attack: number = null
    readonly Mentality: number = null
    readonly Defense: number = null
    readonly Explode: number = null
    readonly Morale: number = null
    readonly baseHP: number = null
    readonly baseMP: number = null
    readonly additionHP: number = null
    readonly additionMP: number = null
    readonly fightType: number = null
    readonly id: number = null
    readonly maxGrade: number = null
    readonly defaultWeapon: BaseEquipmentData[] = null
    readonly defaultArmor: BaseEquipmentData[] = null
    readonly walkEffect: string = null
}
export class BaseArmRelationOfTerrain {
    get uniqueKeyData() {
        return this.id
    }
    static readonly uniqueKeyName: string = 'id'
    /**
    * 标识(名称)
    * @memberof BaseArmRelationOfTerrain
    */
    readonly id: string = null
    readonly armName: string = null
    readonly terrainName: string = null
    readonly addition: number = null
    readonly moveConsum: number = null
    readonly combinationId: number = null
}
export class BaseAttackFightFactor {
    get uniqueKeyData() {
        return this.id
    }
    static readonly uniqueKeyName: string = 'id'
    /**
    * 标识(名称)
    * @memberof BaseAttackFightFactor
    */
    readonly id: string = null
    readonly attackArmName: string = null
    readonly defendArmName: string = null
    readonly factor: number = null
}
export class BaseCheckPointData {
    get uniqueKeyData() {
        return this.id
    }
    static readonly uniqueKeyName: string = 'id'
    /**
    * 关卡id
    * @memberof BaseCheckPointData
    */
    readonly id: string = null
    /**
    * 关卡名
    * @memberof BaseCheckPointData
    */
    readonly checkPointName: string = null
    /**
    * 回合数
    * @memberof BaseCheckPointData
    */
    readonly round: number = null
    /**
    * 不能出场的角色
    * @memberof BaseCheckPointData
    */
    readonly noCanFightRoles: BaseRoleData[] = null
    /**
    * 必须出场的角色
    * @memberof BaseCheckPointData
    */
    readonly mustFightRoles: BaseRoleData[] = null
    /**
    * 最少出场人数
    * @memberof BaseCheckPointData
    */
    readonly minFightRoleNum: number = null
    /**
    * 最多出场人数
    * @memberof BaseCheckPointData
    */
    readonly maxFightRoleNum: number = null
    /**
    * ai出场角色
    * @memberof BaseCheckPointData
    */
    readonly aiFightRoles: BaseFightAIData[] = null
}
export class BaseConsumableData {
    get uniqueKeyData() {
        return this.consumableName
    }
    static readonly uniqueKeyName: string = 'consumableName'
    /**
    * 标识(名称)
    * @memberof BaseConsumableData
    */
    readonly consumableName: string = null
    readonly introduce: string = null
    readonly effect: string = null
    readonly resultID: number = null
    readonly resultNumber: number = null
    readonly pathId: string = null
    readonly value: number = null
    readonly needAverageGrade: number = null
}
export class BaseEquipmentData {
    get uniqueKeyData() {
        return this.equipmentName
    }
    static readonly uniqueKeyName: string = 'equipmentName'
    /**
    * 标识(名称)
    * @memberof BaseEquipmentData
    */
    readonly equipmentName: string = null
    readonly introduce: string = null
    readonly equipmentType: number = null
    readonly equipmentAdaptiveType: number = null
    readonly haveCharacter: boolean = null
    readonly characterEffectIntroduce: string = null
    readonly characterEffectID: number = null
    readonly baseNumber: number = null
    readonly additionNumber: number = null
    readonly characterNumber: string = null
    readonly specialCharacterStr: string = null
    readonly pathId: string = null
    readonly value: number = null
    readonly maxGrade: number = null
    readonly needAverageGrade: number = null
    readonly forgeValue: number = null
    readonly specialAnimationName: string = null
    readonly specialMusicEffectName: string = null
}
export class BaseFightAIData {
    get uniqueKeyData() {
        return this.id
    }
    static readonly uniqueKeyName: string = 'id'
    /**
    * ai标识
    * @memberof BaseFightAIData
    */
    readonly id: string = null
    /**
    * ai对应角色
    * @memberof BaseFightAIData
    */
    readonly roleData: BaseRoleData = null
    /**
    * 加成等级
    * @memberof BaseFightAIData
    */
    readonly additionGrade: number = null
    /**
    * 所属势力(敌军-1,友军2)
    * @memberof BaseFightAIData
    */
    readonly power: number = null
    /**
    * 顺序(对应底图上标识的顺序)
    * @memberof BaseFightAIData
    */
    readonly arrange: number = null
    /**
    * ai类型
    * @memberof BaseFightAIData
    */
    readonly aiType: number = null
    /**
    * ai参数
    * @memberof BaseFightAIData
    */
    readonly aiValue: string = null
    /**
    * 是否初始隐藏也可以在剧本中设定
    * @memberof BaseFightAIData
    */
    readonly isHidden: boolean = null
    /**
    * 设定装备
    * @memberof BaseFightAIData
    */
    readonly setEquipments: BaseEquipmentData[] = null
}
export class BaseProfessionData {
    get uniqueKeyData() {
        return this.id
    }
    static readonly uniqueKeyName: string = 'id'
    /**
    * 标识
    * @memberof BaseProfessionData
    */
    readonly id: string = null
    readonly armData: BaseArmData = null
    readonly grade: number = null
    readonly professionName: string = null
    readonly introduce: string = null
    readonly moveRange: number = null
    readonly attackID: string = null
    readonly influenceData: BaseRangeTable = null
    readonly SpecialProfessionId: number = null
    readonly SpecialProfessionNumber: number = null
    readonly specialAnimationName: string = null
    readonly specialMusicEffectName: string = null
}
export class BaseRangeTable {
    get uniqueKeyData() {
        return this.id
    }
    static readonly uniqueKeyName: string = 'id'
    /**
    * 标识(名称)
    * @memberof BaseRangeTable
    */
    readonly id: string = null
    readonly point: string = null
    readonly range: number = null
    readonly type: number = null
}
export class BaseRoleData {
    get uniqueKeyData() {
        return this.roleName
    }
    static readonly uniqueKeyName: string = 'roleName'
    /**
    * 角色标识
    * @memberof BaseRoleData
    */
    readonly roleName: string = null
    /**
    * 角色真实的名子
    * @memberof BaseRoleData
    */
    readonly roleTrueName: string = null
    /**
    * 介绍
    * @memberof BaseRoleData
    */
    readonly introduce: string = null
    /**
    * 武力
    * @memberof BaseRoleData
    */
    readonly force: number = null
    readonly command: number = null
    readonly brain: number = null
    readonly agility: number = null
    readonly luck: number = null
    readonly SpecialPngMode: number = null
    readonly armData: BaseArmData = null
    readonly id: number = null
    readonly pathId: number = null
    readonly retreatWord: string = null
    readonly RPlotPath: number = null
    readonly explodeWord: string = null
    readonly effectID: string = null
    readonly effectParam: string = null
}
export class BaseStrategyData {
    get uniqueKeyData() {
        return this.strategyName
    }
    static readonly uniqueKeyName: string = 'strategyName'
    /**
    * 标识(名字)
    * @memberof BaseStrategyData
    */
    readonly strategyName: string = null
    readonly strategyTypeID: string = null
    readonly forceHit: boolean = null
    readonly hitRateFactor: number = null
    readonly numberFactor: number = null
    readonly introduce: string = null
    readonly consumeMP: number = null
    readonly effect: string = null
    readonly influenceRangeID: string = null
    readonly strategyUseRangeID: string = null
    readonly Yx: number = null
    readonly pathID: number = null
    readonly AnimatePathId: number = null
    readonly musicEffect: string = null
    readonly specialAnimate: string = null
}
export class BaseStrategyLearnData {
    get uniqueKeyData() {
        return this.armWithStrategy
    }
    static readonly uniqueKeyName: string = 'armWithStrategy'
    /**
    * 兵种和学习的策略的对应关系
    * @memberof BaseStrategyLearnData
    */
    readonly armWithStrategy: string = null
    /**
    * 兵种数据
    * @memberof BaseStrategyLearnData
    */
    readonly armData: BaseArmData = null
    /**
    * 策略数据
    * @memberof BaseStrategyLearnData
    */
    readonly strategyData: BaseStrategyData = null
    /**
    * 兵种等级
    * @memberof BaseStrategyLearnData
    */
    readonly professionGrade: number = null
    /**
    * 角色等级
    * @memberof BaseStrategyLearnData
    */
    readonly grade: number = null
}
export class BaseTerrainData {
    get uniqueKeyData() {
        return this.terrainName
    }
    static readonly uniqueKeyName: string = 'terrainName'
    /**
    * 标识(名称)
    * @memberof BaseTerrainData
    */
    readonly terrainName: string = null
    readonly canMove: boolean = null
    readonly fire: boolean = null
    readonly water: boolean = null
    readonly land: boolean = null
    readonly wind: boolean = null
    readonly recover: number = null
    readonly id: number = null
}
export class BaseTerrainDataNameMapping {
    get uniqueKeyData() {
        return this.mappingName
    }
    static readonly uniqueKeyName: string = 'mappingName'
    /**
    * 标识(名称)
    * @memberof BaseTerrainDataNameMapping
    */
    readonly mappingName: string = null
    readonly terrainData: BaseTerrainData = null
}
