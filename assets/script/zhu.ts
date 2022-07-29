import { _decorator, Component, Node, Contact2DType, PhysicsSystem2D, BoxCollider2D } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('zhu')
export class zhu extends Component {
    public box: BoxCollider2D = null;
    start() {
        PhysicsSystem2D.instance.enable = true;
        let aa = this.getComponent(BoxCollider2D);
        aa.on(Contact2DType.BEGIN_CONTACT, this.beginB, this)
        aa.on(Contact2DType.END_CONTACT, this.endA, this)
    }

    update(deltaTime: number) {

    }
    beginB() {
        console.log(99999999999)
    }
    endA() {
        console.log(66666656)
    }
}

