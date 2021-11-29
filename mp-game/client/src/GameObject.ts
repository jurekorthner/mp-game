import { Vector3 } from "three";

export default class GameObject
{
    id: Number;
    name: String
    position: Vector3;
    rotation: Vector3;

    tick() {}
    fixedTick() {}
}