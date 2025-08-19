import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="#">
            Feminora
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

   
      <header
        className="text-white text-center d-flex align-items-center"
        style={{
          backgroundImage:
            'url("https://i.pinimg.com/736x/f3/aa/8b/f3aa8b5215be7bc70ba00cd69de11d7e.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "60vh",
          textShadow: "1px 1px 4px rgba(0,0,0,0.6)",
        }}
      >
        <div className="container">
          <h1 className="fw-bold">Welcome to Feminora</h1>
          <p className="lead fst-italic">
            Unveiling the beauty of every woman with Feminora
          </p>
          <p>Discover beautiful ornaments for every occasion.</p>
          <a href="#" className="btn btn-light btn-lg">
            Shop Now
          </a>
        </div>
      </header>

      {/* Products Section */}
      <div className="container my-5">
        <div className="row">
          {/* Necklace */}
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://darlagold.in/uploads/jewellery/1710241137_0f80ad2e2b2b6961361b.jpg"
                className="card-img-top"
                alt="Necklace"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Necklaces</h5>
                <p>Explore our exquisite collection of necklaces.</p>
                <a href="#" className="btn btn-dark">
                  View More
                </a>
              </div>
            </div>
          </div>

          {/* Earrings */}
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://i.pinimg.com/originals/8d/99/ec/8d99ecc4f5dcc669f30230eb6f7000bb.jpg"
                className="card-img-top"
                alt="Earrings"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Earrings</h5>
                <p>Explore our elegant collection of earrings.</p>
                <a href="#" className="btn btn-dark">
                  View More
                </a>
              </div>
            </div>
          </div>

          {/* Bangles */}
          <div className="col-sm-12 col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <img
                src="https://static.wixstatic.com/media/302d11_eb33da90cd344f558af43b9600e5ad78~mv2.jpg/v1/fill/w_564,h_564,al_c,q_80,enc_auto/302d11_eb33da90cd344f558af43b9600e5ad78~mv2.jpg"
                className="card-img-top"
                alt="Bangles"
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">Bangles</h5>
                <p>Explore our stylish collection of bangles.</p>
                <a href="#" className="btn btn-dark">
                  View More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <form className="p-4 shadow rounded bg-light">
              <div className="mb-3">
                <label className="form-label fw-bold">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-bold">Message</label>
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Write your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-dark w-100">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <p className="mb-0">© 2025 Feminora | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
