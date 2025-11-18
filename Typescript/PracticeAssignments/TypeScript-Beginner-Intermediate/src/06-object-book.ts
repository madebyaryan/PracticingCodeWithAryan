/* Create objects representing books in a library. Each book should have a title, author, publicationYear, isAvailable, and pages. 
Write functions to check out a book, return a book, and find books by a specific author. Use proper object typing throughout. 
Add a function that finds all available books published after a certain year. 
Create nested objects by adding a publisher object with name and country properties within each book. 
Practice object destructuring by extracting specific properties from book objects in your functions to make the code cleaner and more readable. */

type Publisher = {
    name: string,
    country: string
}

type Book = {
    title: string,
    author: string,
    publicationYear: number,
    isAvailable: boolean,
    pages: number,
    publisher: Publisher
}

class Library {
    public books: Book[] = [];
    constructor(books: Book[]) {
        this.books = books;
    }

    checkOutBook({ title }: Book): string {
        const findBook = this.books.find(({ title: bookTitle, isAvailable }) => bookTitle === title && isAvailable === true)
        if (findBook) {
            findBook.isAvailable = false;
            return "Book has been succesfuly checked out!";
        }
        return `Checking out Book: ${title} unsuccesful...`;
    }

    returnBook({ title }: Book): string {
        const findBook = this.books.find(({ title: bookTitle }) => bookTitle === title);
        if (findBook) {
            findBook.isAvailable = false;
            this.books.push(findBook);
            return "Book has been succesfuly returned!";
        }
        return "Book has never left the library!"
    }

    findBooksByAuthor(author: string): Book[] {
        return this.books.filter(({ author: bookAuthor }) => bookAuthor === author)
    }

    findAvailableBooksAfterYear(year: number): Book[] {
        return this.books.filter(({ publicationYear, isAvailable }) => publicationYear > year && isAvailable === true);
    }
}
