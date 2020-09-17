import { OBJECT_TYPE, DIRECTIONS } from "./setup";
import Character from "./Character";

class Pacman extends Character {
  constructor(speed, startPos) {
    super(speed, startPos);

    this.dir = null;
    this.powerPill = false;
    this.rotation = true;
  }

  getNextMove(objectExists) {
    let nextMovePos = this.pos + this.dir.movement;

    if (
      objectExists(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExists(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
    ) {
      nextMovePos = this.pos;
    }

    return { nextMovePos, direction: this.dir };
  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN];
    const classesToAdd = [OBJECT_TYPE.PACMAN];

    return { classesToRemove, classesToAdd };
  }

  setNewPos(nextMovePos) {
    this.pos = nextMovePos;
  }

  handleKeyInput(e, objectExists) {
    let dir;

    if (e.keyCode >= 37 && e.keyCode <= 40) {
      dir = DIRECTIONS[e.key];
    } else {
      return;
    }

    const nextMovePos = this.pos + dir.movement;
    if (
      objectExists(nextMovePos, OBJECT_TYPE.WALL) ||
      objectExists(nextMovePos, OBJECT_TYPE.GHOSTLAIR)
    )
      return;
    this.dir = dir;
  }
}

export default Pacman;
