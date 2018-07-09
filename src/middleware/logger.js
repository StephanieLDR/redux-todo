// ES6 example bottom:


//ES5 example:

// export default function (store) {
//     return function(next){
//         return function(action) {
//             //codes goes here
//         }
//     }
// }

export default store => next => action=> {

    console.log("ACTION: ", action);
    return next(action);
}