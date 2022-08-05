import { Point } from './utils'

export class Direction extends Point {

  public static create(x: number, y: number) {
    const direction = new Direction();
    direction.x = x;
    direction.y = y;
    return direction;
  }

  public static UP = Direction.create(0, -1);
  public static DOWN = Direction.create(0, 1);
  public static LEFT = Direction.create(-1, 0);
  public static RIGHT = Direction.create(1, 0);
  public static UP_LEFT = Direction.create(-1, -1);
  public static UP_RIGHT = Direction.create(1, -1);
  public static DOWN_LEFT = Direction.create(-1, 1);
  public static DOWN_RIGHT = Direction.create(1, 1);
}