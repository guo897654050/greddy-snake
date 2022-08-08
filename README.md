# greddy-snake

### 通用熟悉贪吃蛇逻辑 完成ts类型的练习
  1. 抽象类的完善，类似于ts的函数签名，不会具体定义函数的方法，通过`abstract`关键字来定义，子类集成必须完善该方法。
  2. 在ts中，可以在构造函数中使用`public`关键字来声明，也可以直接定义如
    ```javascript
      // 简单
      public x = 0;
      
      // 同上，好理解
      constuctor(public x: number) {
        // 无需 this.x = x;
      }

      最复杂；
      public x: number
      constuctor(x) {
        this.x = x;
      }
    ```



### package.json字段
 - 声明文件直接通过tsc打包。
 - 使用vite库模式打包，会默认为我们生成`es`和`umd`两种格式的打包文件。
 - 通过pakcage.json的`exports`字段来供用户使用不同的方式导入。
 - `types`字段规定了生命文件的入口。