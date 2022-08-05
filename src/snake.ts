import { Point } from './utils'
import { Direction } from './game'



class SnakeNode extends Point {
  public static create(x: number, y: number) {
    const node = new SnakeNode();
    node.x = x;
    node.y = y;
    return node
  }
}


export class Snake extends Point {
  /** 
   * 蛇身节点数组
   */
  public body: SnakeNode[] = [];

  /**
   * 获取蛇头
   */
  public get head() {
    return this.body[0]
  }

  /**
   * 获取蛇长度
   */
  public get size() {
    return this.body.length;
  }

  /**
   * 初始化蛇
   * @param bodyLength 
   */
  public init(bodyLength: number) {
    for (let i = 0; i < bodyLength; i++) {
      this.prepend(SnakeNode.create(i, 0))
    }
  }

  /**
   * 向蛇头添加
   * @param point 
   */
  public prepend(point: SnakeNode) {
    this.body.unshift(point)
  }

  /**
   * 蛇身生长
   */
  public grow(point: SnakeNode) {
    this.body.push(point)
  }

  /**
   * 蛇身减少
   */
  public reduce() {
    this.body.pop();
  }


  /**
   * 蛇移动的下个位置和方向有关
   */
  public getNextPosition(direction: Direction) {
    const head = this.head;
    // 
    const point = new Point();
    point.x = head.x + direction.x;
    point.y = head.y + direction.y;
    return point;
  }

  /**
   * 移动
   */
}
