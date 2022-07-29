import { _decorator, Component, Node, input, Input, Contact2DType, BoxCollider2D, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('total')
export class total extends Component {
    @property({ type: Node })
    public red: Node = null;
    @property({ type: Node })
    public white: Node = null;
    start() {
        input.on(Input.EventType.KEY_DOWN, this.keyDown, this)
        let ww = this.getComponent(BoxCollider2D)
        console.log(ww)
        ww.on(Contact2DType.BEGIN_CONTACT, this.beginA, this)
        ww.on(Contact2DType.END_CONTACT, this.endA, this)
    }

    update(deltaTime: number) {

    }
    keyDown(event) {
        if (event.keyCode == 39) {
            let x = this.node.getPosition()
            //console.log(x, 8888)
            this.node.setPosition(new Vec3(x.x + 10, x.y, 0))
        }
    }
    beginA() {
        this.red.active = true;
        this.white.active = false;
    }
    endA() {
        console.log(6666666666666666)
        this.red.active = false;
        this.white.active = true;
    }
}

