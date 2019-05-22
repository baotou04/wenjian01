import ccclass = cc._decorator.ccclass;
import Component = cc.Component;
import property = cc._decorator.property;

@ccclass
export default class Game extends Component{
    @property(cc.Node)
    private player:cc.Node=null;
    @property(cc.Prefab)
    private blocks:Array<cc.Prefab>=[];
    @property(cc.Node)
    private block_root:cc.Node=null;



    protected start(){
        let block=cc.instantiate(this.blocks[Math.floor(Math.random()*3)])
        this.block_root.addChild(block);
        block.setPosition(this.block_root.convertToNodeSpaceAR((0,0)))
    }
}