"use strict";
const path = require('path')
exports.methods={
    createJsonTs(){
        let excelToJsonFrame = require('../../Metaprogramming-ts/src/excelToJsonTs/ExcelToJsonFrame').excelToJsonFrame
        let projectPath = path.resolve(__dirname, '../..')
        console.log('项目路径:' + projectPath)
        excelToJsonFrame(
            projectPath + '/excel',
            projectPath + '/assets',
            projectPath + '/assets/resources/')
    },
    createPbTs(){
        let excelToPbFrame = require('../../Metaprogramming-ts/src/excelToPbTs/excelToPbFrame').excelToPbFrame
        let projectPath = path.resolve(__dirname, '../..')
        console.log('项目路径:' + projectPath)
        excelToPbFrame(
            projectPath + '/excel',
            projectPath + '/assets',
            projectPath + '/assets/resources/')
    },
    createNetPbTs(){
        let createPbMessage = require('../../Metaprogramming-ts/src/netInfoCreate/PbMessageCreate').createClientPbMessage
        let projectPath = path.resolve(__dirname, '../..')
        console.log('项目路径:' + projectPath)
        createPbMessage(
            projectPath + '/proto',
            projectPath + '/assets/jypFrame/netMsg')
    }
},
exports.load=function(){
    require('../../GameSeedProjectInit').judgeIsNeedInit()
    console.log('game-sead-tool load')
},exports.unload=function(){
    console.log('game-sead-tool unload')
};