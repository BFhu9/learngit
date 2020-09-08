function fn(){
    console.log('fn')
}

let student = {
    username:"老陈"
}


console.log('student:',student.username)

// module.exports = {student,fn}

exports.fn = fn;