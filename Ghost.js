import { DIRECTIONS, OBJECT_TYPE } from "./setup";
import Character from "./Character";

class Ghost extends Character {
  constructor(speed = 5, startPos, movement, name) {
    super(speed, startPos);
    this.name = name;
    this.movement = movement;
    this.startPos = startPos;
    this.dir = DIRECTIONS.ArrowRight;
    this.isScared = false;
    this.rotation = false;
  }

  getNextMove(objectExists) {
    const { nextMovePos, direction } = this.movement(
      this.pos,
      this.dir,
      objectExists
    );
    return { nextMovePos, direction };
  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.GHOST, OBJECT_TYPE.SCARED, this.name];
    let classesToAdd = [OBJECT_TYPE.GHOST, this.name];

    if (this.isScared) classesToAdd = [...classesToAdd, OBJECT_TYPE.SCARED];

    return { classesToRemove, classesToAdd };
  }

  setNewPos(nextMovePos, direction) {
    this.pos = nextMovePos;
    this.dir = direction;
  }
}

export default Ghost;
