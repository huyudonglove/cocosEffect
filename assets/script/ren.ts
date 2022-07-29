import { _decorator, Component, Node, input, Input, Vec3, Contact2DType, PhysicsSystem2D, RigidBody2D, BoxCollider2D, EPhysics2DDrawFlags, Sprite, Material, EffectAsset } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ren')
export class ren extends Component {
    public rig: BoxCollider2D = null;
    public spr: Sprite = null;
    public mtl: Material = null;
    @property({
        type: Node
    })
    public dier: Node = null;
    start() {
        this.dier.active = false
        PhysicsSystem2D.instance.enable = true;
        //PhysicsSystem2D.instance.debugDrawFlags = EPhysics2DDrawFlags.All
        input.on(Input.EventType.KEY_DOWN, this.keyDown, this)
        // console.log(this)
        // console.log(this.node, 9999999)
        let ww = this.getComponent(BoxCollider2D)
        //console.log(ww)
        ww.on(Contact2DType.BEGIN_CONTACT, this.beginA, this)
        this.spr = this.node.getComponent(Sprite);
        //console.log(this.spr, 9999999999999)
        this.mtl = this.spr.getMaterial(0);
        //console.log(this.mtl, 999999)
    }

    update(deltaTime: number) {

    }
    keyDown(event) {
        //console.log(event)

        if (event.keyCode == 39) {
            let x = this.node.getPosition()
            //console.log(x, 8888)
            this.node.setPosition(new Vec3(x.x + 10, x.y, 0))
        }
        //console.log(this.spr.getMaterial(0))
        this.node.active = false;
        this.dier.active = true;
    }
    beginA() {
        console.log(333333333)
    }
}

