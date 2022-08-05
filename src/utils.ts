export class Point {
  public x = 0;
  public y = 0;

  public static create(x: number, y: number) {
    const point = new Point();
    point.x = x;
    point.y = y;
    return point;
  }
}


/**
 * 创建地图内合法的随机点，且不和贪吃蛇身体重合
 * @param maxX 地图宽度
 * @param maxY 地图高度
 * @param points 地图的点
 * @returns 
 */
export function getRandomPoint(maxX: number, maxY: number, points: Point[]) {
  let x = 0;
  let y = 0;
  random()
  function random() {
    x = Math.floor(Math.random() * maxX);
    y = Math.floor(Math.random() * maxY);
    for (let i = 0; i < points.length; i++) {
      if (x === points[i].x && y === points[i].y) {
        random();
        break;
      }
    }
  }
  return Point.create(x, y)
}