export function returnTop5Books(allBooks) {
    let top5BooksArray = [...allBooks]; 
    for (let i = 0; i < top5BooksArray.length; i++) {
        for (let j = i + 1; j < top5BooksArray.length; j++) {
            if (top5BooksArray[i].viewed < top5BooksArray[j].viewed) {
                const temp = top5BooksArray[i];
                top5BooksArray[i] = top5BooksArray[j];
                top5BooksArray[j] = temp;
            }
        }
    }

    return top5BooksArray.slice(0, 5); 
}
