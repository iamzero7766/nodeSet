const util = require('util');
// 1. callbackify
async function fn() {
  return 'hello world';
}
const callbackFunction = util.callbackify(fn);

callbackFunction((err, ret) => {
  if (err) throw err;
  console.log(ret);
});



// 2. util.inherits(constructor, superConstructor) 是一个实现对象间原型继承的函数。
function Base() { 
    this.name = 'base'; 
    this.base = 1991; 
    this.sayHello = function() { 
    console.log('Hello ' + this.name); 
    }; 
} 
Base.prototype.showName = function() { 
    console.log(this.name);
}; 
function Sub() { 
    this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); 
console.log(objSub); 






// 3. util.inspect(object,[showHidden],[depth],[colors]) 
// 是一个将任意对象转换 为字符串的方法，通常用于调试和错误输出。它至少接受一个参数 object，即要转换的对象。
function Person() { 
    this.name = 'byvoid'; 
    this.toString = function() { 
    return this.name; 
    }; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); 
console.log(util.inspect(obj, true));


// 4. util.isArray(object)
util.isArray([])  // true
util.isArray(new Array)  // true
util.isArray({})  // false


// 5. util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

