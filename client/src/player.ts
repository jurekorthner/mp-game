import { FlyCamera, Scene, TransformNode, Vector3 } from "@babylonjs/core"


export class Player extends TransformNode {
    public camera: FlyCamera;

    constructor(name: string, scene: Scene) {
        super(name, scene);

        this._scene = scene;
        this.camera = new FlyCamera("playerCamera", new Vector3(0, 0, 25), this._scene, true); 
        this.camera.parent = this;
        
    }    
}