export class GameMap {

  constructor(public readonly width: number, public readonly height: number) { }

  public isCollision(x: number, y: number) {
    const isCollision = x < 0 || x > this.width || y < 0 || y > this.height;
    if (isCollision) {
      console.error('撞墙了！')
    }
    return isCollision
  }
}