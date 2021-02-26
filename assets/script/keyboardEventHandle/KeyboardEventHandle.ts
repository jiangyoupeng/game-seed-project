import { EventKeyboard, EventTarget, SystemEvent, systemEvent } from "cc"

export class KeyboardEventHandle {
    private static _init: boolean = false
    /**按下键盘处理事件 */
    public static keyDownHandleEvents: EventTarget = new EventTarget()
    /**放开键盘处理事件 */
    public static keyUpHandleEvents: EventTarget = new EventTarget()

    /**当前按下的键值 */
    public static nowHandleKey: { [key: number]: boolean } = {}

    public static hasKey(key: number) {
        return this.nowHandleKey[key]
    }
    /**初始话键盘事件接口 和一些通用事件的处理 */
    static initCommonHandle() {
        if (!this._init) {
            this._init = true

            systemEvent.on(SystemEvent.EventType.KEY_DOWN, (event: EventKeyboard) => {
                this.keyDownHandleEvents.emit("" + event.keyCode)
                this.nowHandleKey[event.keyCode] = true
            })
            systemEvent.on(SystemEvent.EventType.KEY_UP, (event: EventKeyboard) => {
                this.keyUpHandleEvents.emit("" + event.keyCode)
                this.nowHandleKey[event.keyCode] = false
            })
        }
    }
}
