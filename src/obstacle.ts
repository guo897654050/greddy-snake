import { Game } from './game';
import { Point, getRandomPoint } from './utils';


export abstract class Obstacle extends Point {
  /**
   * 障碍物类型
   */
  public abstract type: string;

  /**
   * 障碍物生成
   */
  public abstract produce(): void;

  /**
   * 障碍物相撞
   */

  public abstract consume(): boolean;


  constructor(protected game: Game) {
    super();
  }

  /**
   * 随机生成障碍物位置
   */
  public getRandomPoint() {
    const { game } = this;
    const points = game.forbiddenPoints;
    const point = getRandomPoint(game.map.width, game.map.height, points);
    return point;
  }
}

export class Food extends Obstacle {
  public type = 'food';

  public produce(): void {
    const point = this.getRandomPoint();
    // 继承自point类，自带x,y
    this.x = point.x;
    this.y = point.y;
  }

  public consume(): boolean {
    this.game.snake.grow(this.x, this.y);
    this.game.count++;
    return true;
  }
}


/**
 * 炸弹
 */
export class Bomb extends Obstacle {
  public type = 'bomb';

  public produce() {
    const point = this.getRandomPoint();
    this.x = point.x;
    this.y = point.y;
  }

  public consume() {
    // 初始长度为3
    if (this.game.count > 3) {
      // 炸弹爆炸，蛇身长度减1
      this.game.snake.reduce();
      // 计数减1
      this.game.count--;
    }
    return true;
  }
}

export class ObstacleManager {
  public obstacles: Obstacle[] = [];

  public add(obstacle: Obstacle) {
    this.obstacles.push(obstacle)
  }

  /**
   * 发生碰撞的障碍物
   */
  public isCollision(point: Point) {
    return this.obstacles.filter((o) => o.x === point.x && o.y === point.y)
  }

  public init() {
    this.obstacles.forEach((o) => o.produce())
  }
}