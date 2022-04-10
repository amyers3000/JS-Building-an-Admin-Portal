
async function getBooks(){
    let response = await fetch('http://localhost:3001/listBooks');
    let books = await response.json()
    console.log(books)
    books.forEach(displayBooks)
}

function displayBooks(books){
    let displayDiv = document.querySelector('#root')
    let bookList = document.createElement('ul')

    let li = document.createElement('li')
    li.textContent = books.title

    let quantityInput = document.createElement('input')
    quantityInput.textContent = books.quantity 

    let saveButton = document.createElement('button')
    saveButton.textContent = 'save'

    bookList.appendChild(li)

    li.append(quantityInput, saveButton)
    displayDiv.appendChild(bookList)

    saveButton.addEventListener('click', function(){
        fetch('http://localhost:3001/updateBook', {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: book.id,
                quantity: quantityInput.value
            })
        })
    })
    
    
   
}

getBooks()



