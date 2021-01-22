const exec = require('child_process').exec
const path = require('path')
const fs = require('fs')
Object.defineProperty(exports, "__esModule", { value: true });
exports.judgeIsNeedInit = exports.judgeIsNeedInit = void 0;

let subModelePath = [
    path.join(__dirname ,'nodeTool'),
    path.join(__dirname , 'Metaprogramming-ts'),
    path.join(__dirname , 'creatorGameLib')
]
// 检查当前项目依赖子模块是否更新
function initSeadProject() {
    // 监听开始游戏初始化
    console.log('start game sead init ')
    let initCmdsIndex = 0

    function callCmd() {
        if (initCmdsIndex < subModelePath.length){
            let subPath = subModelePath[initCmdsIndex]
            initCmdsIndex++
            console.log('install path ' + subPath)
            exec('npm install',{cwd: subPath}, (err, stdout, stderr) => {
                if (err){
                    console.log(err);
                    console.warn(new Date(),subPath + ' install fail');
                } else {
                    console.log(stdout);
                    console.warn(new Date(),subPath + ' install suc');
                    callCmd()
                }
            })
        }else{
            console.log('GameSeedProjectInit over')
        }
    }
    callCmd()
}

function judgeIsNeedInit() {
    console.log('检测项目是否初始化')
    for (let index = 0; index < subModelePath.length; index++) {
        let nodeModulePath = path.join(subModelePath[index], 'node_modules')
        if (!fs.existsSync(nodeModulePath)){
            let packJson = JSON.parse(fs.readFileSync(path.join(subModelePath[index], 'package.json')))
            if (packJson.dependencies || packJson.devDependencies ){
                initSeadProject()
                break
            }
        }
    }
}

exports.judgeIsNeedInit = judgeIsNeedInit