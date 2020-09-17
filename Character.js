class Character {
  constructor(speed, startPos) {
    this.speed = speed;
    this.pos = startPos;
    this.timer = 0;
  }

  shouldMove() {
    if (!this.dir) return false;

    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }
    this.timer++;
  }
}

export default Character;
