// function showDialog() {
//     var myString = '';
//     for (var param of arguments) {
//         myString += `${param} - `;
//     }
//     console.log(myString);
// }

// showDialog('Trieu', 'Phu', 'Do', 'La');


// // Làm việc với mảng
// // 1. Pop

// var languages = [
//     'Java',
//     'Php',
//     'Javascript'
// ];

// // console.log(languages.pop()); // Pop là xóa phần tử cuối
// // console.log(languages.push('Dark')); // push là thêm phần tử cuối
// // console.log(languages.shift());  // xóa phần tử đầu
// // console.log(languages.unshift('Mini')); // thêm phần tử đầu

// console.log(languages.splice(1, 0, 'Dark')); // Từ vị trí số 1 xóa 0 phần tử thêm phần tử Dark tại chỗ xóa
// console.log(languages); 


var orders = [
    {
        name: 'Khóa học HTML - CSS Pro',
        price: 3000000
    },
    {
        name: 'Khóa học Javascript Pro',
        price: 2500000
    },
    {
        name: 'Khóa học React Pro',
        price: 3200000
    }
]

function getTotal(orders){
    var result = 0;
    var arrLength = orders.length;
    for(var i = 0; i < arrLength; i++){
        result += orders[i].price;
    }
    return result;
}


// Expected results:
console.log(getTotal(orders)) // Output: 8700000

    // Expected results:
    // getTotal(orders) // Output: 8700000
