const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser : true,
    useCreateIndex : true,
    useFindAndModify : false // this is set true by desfault but since it is depricated we set it to false to use the said method 
})

// const User = mongoose.model('User', {
//     name : {
//         type : String,
//         required : true,
//         trim : true
//     },
//     email : {
//         type : String,
//         required : true,
//         trim : true,
//         lowercase : true,
//         validate(value){
//             if ( !validator.isEmail(value)) {
//                 throw new Error('Email invalid')
//             }
//         }
//     },
//     age : {
//         type : Number,
//         default : 0,
//         validate(value){
//             if (value < 0 ){
//                 throw new Error('Age must be a positive number')
//             }
//         }
//     },
//     password : {
//         type : String,
//         required : true,
//         trim : true,
//         minlength : 7 ,
        
//         validate(value) {
//             if (value.toLowerCase().includes('password')){
//                 throw new Error('Password should not contain the word password')
//             }
//         }
//     }
// })

// const me = new User({
//     name : 'Shubham1',
//     email : 'shubham1@a.in   ',
//     password : 'abcs1234'
// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('Error! ', error)
// })

// const Task = mongoose.model('Task', {
//     description : {
//         type : String,
//         required : true,
//         trim : true
//     },
//     completed : {
//         type : Boolean,
//         default : false
//     }
// })

// const task = new Task({
//     description : '   Eat lunch    ',
// })

// task.save().then(()=>{
//     console.log(task)
// }).catch((error)=>{
//     console.log('Error! ', error)
// })