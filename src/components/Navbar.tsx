import { useState } from 'react';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-bold" href="#">
          <i className="bi bi-images me-2"></i>
          Image
        </a>

        {/* Mobile toggle button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarNav">
          {/* Menu items */}
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="bi bi-house-door me-1"></i>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-grid me-1"></i>
                Gallery
              </a>
            </li>
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                <i className="bi bi-collection me-1"></i>
                Categories
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Nature</a></li>
                <li><a className="dropdown-item" href="#">Architecture</a></li>
                <li><a className="dropdown-item" href="#">People</a></li>
                <li><a className="dropdown-item" href="#">Animals</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">All Categories</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                <i className="bi bi-heart me-1"></i>
                Favorites
              </a>
            </li>
          </ul>

          {/* Search form */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <div className="input-group">
              <input
                className="form-control"
                type="search"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{ minWidth: '200px' }}
              />
              <button className="btn btn-outline-light" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </div>
          </form>

          {/* Login button */}
          <div className="d-flex">
            <button className="btn btn-outline-light me-2">
              <i className="bi bi-person-plus me-1"></i>
              Sign Up
            </button>
            <button className="btn btn-light">
              <i className="bi bi-box-arrow-in-right me-1"></i>
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;