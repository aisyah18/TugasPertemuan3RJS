import { useState } from 'react';
import booksData from '../data/books';

export default function Book() {
  const [bookList, setBookList] = useState(booksData);

  const addBook = () => {
    const newBook = {
      id: bookList.length + 1,
      title: "Buku Tambahan",
      author: "Penulis Baru",
      image: "https://via.placeholder.com/300x400",
      description: "Contoh buku tambahan yang ditambahkan secara dinamis.",
    };
    setBookList([...bookList, newBook]);
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Halaman Buku</h2>
      <button className="btn btn-outline-primary mb-4" onClick={addBook}>Tambah Buku</button>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {bookList.map((book) => (
          <div className="col" key={book.id}>
            <div className="card h-100 shadow-sm">
              <img src={book.image} className="card-img-top" alt={book.title} height="300" />
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
                <p className="text-muted"><em>{book.author}</em></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
