import { _decorator, Component, Node, input, Input, Material, MeshRenderer } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('cube')
export class cube extends Component {
    start() {
        //console.log(this)
        input.on(Input.EventType.MOUSE_DOWN, this.click, this)
    }

    update(deltaTime: number) {

    }
    click(event) {
        let mt = this.node.getComponent(MeshRenderer)
        //console.log(mt)
        let data0 = mt.getMaterial(0)
        let data1 = mt.getMaterial(1)
        mt.setMaterial(data1, 0)
        mt.setMaterial(data0, 1)
    }
}

