// 将字符串放置到缓冲区
let b1 = Buffer.from('10')
console.log(b1)
console.log(b1.toString())


// 初始化缓冲区,创建一个大小为10个字节的缓冲区
// 保证新创建的缓冲区数据是不会包含旧的数据
let b2 = Buffer.alloc(10)
console.log(b2)

// 不会重置数据,不太安全，需要谨慎使用
let b3 = Buffer.allocUnsafe(10)
console.log(b3)

b3[0] = 3
console.log(b3)
console.log(b3[0].toString())
