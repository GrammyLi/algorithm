// First In Last Out
class Stack {
    constructor() {
        this.count = 0
        this.items = {} // 用对象存储
    }

    push(element) {
        this.items[this.count] = element
        this.count++
    }

    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.count - 1]
    }

    isEmpty() {
        return this.count === 0
    }

    size() {
        return this.count
    }

    clear() {
        this.count = 0
        this.items = {}
    }

    toArray() {
        return Array.prototype.slice.call(Object.values(this.items))
    }

    toString() {
        if (this.isEmpty()) {
            return ''
        }

        let objString = `${this.items[0]}`
        for (let i = 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}


const log = console.log.bind(console, '**** debug ****')

// 转换为2--32进制
function baseConverter(decNumber, base) {
    const remStack = new Stack()
    let number = decNumber
    let digits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let resultString = ''
    let rem

    while (number > 0) {
        rem = Math.floor(number % base)
        remStack.push(rem)
        number = Math.floor(number / base)
    }

    while (!remStack.isEmpty()) {
        resultString += digits[remStack.pop()]
    }

    return resultString
}

// 十进制转换为二进制
function decimaltoBinary(decNumber) {
    const remStack = new Stack()
    let number = decNumber
    let rem
    let resultString = ''
    while (number > 0) {
        rem = Math.floor(number % 2)
        remStack.push(rem)
        number = Math.floor(number / 2)
    }
    log('rem', remStack)
    while (remStack.size() !== 0) {
        const n = remStack.pop()
        resultString += String(n)
    }

    return resultString
}

const test = () => {
    const num = 2022
    const n = decimaltoBinary(num)
    log('n', n)
    const base = 2
    const newN = baseConverter(num, base)
    log('newN', newN)
}

test()
