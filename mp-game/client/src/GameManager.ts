import * as THREE from "three";
import { Object3D } from "three";
import GameObject from "./GameObject";

export default class GameManager {
    objects = new Array<GameObject>();

    register(obj: GameObject) {
        this.objects.push(obj);
    }

    tick(delta: Number) {
        this.objects.forEach(element => {
            element.tick();
        });
    }

    fixedTick() {
        this.objects.forEach(element => {
            element.fixedTick();
        });

    }
}