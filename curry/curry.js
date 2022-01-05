/*
什么是js curry(柯里化)：
Currying 只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
 */
function Currying(fn, ...args1) {
  return function(...args2) {
    return fn(...args1, ...args2)
  }
}

const add = (...args) => {
  let sum = 0
  for (let a of args) {
    sum += a
  }
  return sum
}

const increament = Currying(add, 1)
increament(2) === 3