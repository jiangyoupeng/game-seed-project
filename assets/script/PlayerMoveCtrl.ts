
import { _decorator, Component, Node, macro, Vec3 } from 'cc';
import { KeyboardEventHandle } from './keyboardEventHandle/KeyboardEventHandle';
const { ccclass, property } = _decorator;

export enum MoveDirection{
    up,
    down,
    left,
    right
}

@ccclass('PlayerMoveCtrl')
export class PlayerMoveCtrl extends Component {

    // 前进方向向量
    upVector: Vec3|null = null
    // 右转方向向量
    rightVector: Vec3|null = null

    start () {
        KeyboardEventHandle.keyDownHandleEvents.on('' + macro.KEY.w, ()=>{

        })
        // [3]
    }

    setMoveDirecton(){

    }

    roleMove(dir: MoveDirection){
        let eulerAngles = this.node.rotation.getEulerAngles
    }
}
