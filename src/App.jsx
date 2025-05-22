import { useState } from 'react';
import './App.css';
import Team from './pages/Team';
import Contact from './pages/Contact';
import Book from './pages/Book';
import books from './data/books';

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  const renderPage = () => {
    switch (currentPage) {
      case "Team":
        return <Team />;
      case "Contact":
        return <Contact />;
      case "Book":
        return <Book />;
      default:
        return (
          <>
            <div className="container my-5">
              <div className="row p-4 align-items-center rounded-3 border shadow-lg">
                <div className="col-lg-7">
                  <h1 className="display-5 fw-bold">Small Steps Lead to Big Changes</h1>
                  <p className="lead">Pelajari cara membentuk kebiasaan positif dengan langkah kecil.</p>
                  <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                    <button className="btn btn-primary btn-lg px-4 me-md-2">Beli Buku</button>
                    <button className="btn btn-outline-secondary btn-lg px-4">Lihat Detail</button>
                  </div>
                </div>
                <div className="col-lg-5">
                  <img className="img-fluid rounded" src="https://picsum.photos/600/400" alt="book" />
                </div>
              </div>
            </div>

            <div className="container my-5">
              <h3 className="mb-4">Rekomendasi Buku</h3>
              <div className="row row-cols-1 row-cols-md-3 g-4">
                {books.map((book) => (
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
          </>
        );
    }
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="d-flex flex-wrap align-items-center justify-content-between py-3 mb-4 border-bottom">
        <a href="#" className="d-flex align-items-center text-decoration-none">
          <i className="fa-solid fa-book fa-2xl text-primary"></i>
          <span className="ms-2 fs-4 fw-bold">BookStore</span>
        </a>
        <ul className="nav">
          {["Home", "Book", "Team", "Contact"].map((page) => (
            <li key={page}>
              <button onClick={() => setCurrentPage(page)} className="nav-link btn btn-link">
                {page}
              </button>
            </li>
          ))}
        </ul>
      </header>

      {/* Dynamic Page */}
      {renderPage()}

      {/* Footer */}
      <footer className="py-4 mt-5 border-top text-center text-muted">
        <p>&copy; 2025 BookStore - Dibuat oleh Aisyah Dwi Pratiwi</p>
      </footer>
    </div>
  );
}

export default App;
