



// // Классы

// class Comment {
//     constructor(text) {
//         this.text = text
//         this.votesQty = 0
//     }

//     upvote() {
//         this.votesQty += 1
//     }
// }









// // Расширение других классов

// class ExtendedArray extends Array {
//     info() {
//         return `Array has ${this.length} elements`
//     }
// }

// const myArray = new ExtendedArray(2, 5, 7)


// console.log(myArray.info());








// // Получение данных с помощью промисов и fetch API

// fetch('https://jsonplaceholder.typicode.com/posts')
// .then(response => response.json)
// .then(json => console.log(json))
// .catch(error => console.error(error))








// Asinc / Await

async function fetchData(url) {
    try {
        const response = await fetch(url)
        return response.json()
    } catch(error) {
        console.log(error)
    }
}

const url = 'https://jsonplaceholder.typicode.com/posts'

fetchData(url).then(data => {
    console.log(data);
})

















