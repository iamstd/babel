
//  String 

    // 模板字符串应用
        let a = 'a', b = 'b';
        const x = 1, y = 12;
        let result = `${x + y}`;  // 相比quote, 可计算
        console.log(result) // 13
        let string = `${a + b}`;  // a + b 等价
        console.log(string) // 13

        // 调用函数
        let fn = function fn () {
            return a + 1;
        }
        let funct = `${ fn() }`;
        console.log(funct);