
import { useState } from 'react';
import { BrandImgUrl } from '../constants';
import '../App.scss';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Add your search logic here
    }
  };

  return (
    <header className='sticky-top-lg bg-white w-100' style={{ zIndex: 1030 }}>
      <nav className="navbar navbar-expand-lg px-2 py-0 container-xl d-flex align-items-center">
          {/* Brand */}
          <a className="navbar-brand fw-bold d-flex align-items-center flex-grow-1" href="/">
            <img src={BrandImgUrl} alt="Brand" className="brand-img" />
          </a>


          {/* Search form */}
          <form className="d-flex flex-grow-1 position-relative d-none d-lg-flex" onSubmit={handleSearch}>
            <input
              className="form-control search-input rounded-pill py-2 px-3 vertical-align-middle lh-lg"
              type="search"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button type="submit" className="btn btn-link position-absolute top-50 end-0 translate-middle-y"><i className="bi bi-search text-primary px-1"></i></button>
          </form>

          {/* Mobile toggle button */}
          <button 
            className="navbar-toggler border-0 bg-primary shadow-none" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            title="Toggle navigation"
            aria-expanded={isCollapsed ? "false" : "true"}
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <span className="bi bi-list text-primary"></span>
          </button>
          {/* Navbar content */}
          <section className="collapse navbar-collapse" id="navbarNav">
            <section className=' d-flex flex-column flex-lg-row align-items-center ms-auto my-md-2'>
              {/* Menu items */}
              <section className="navbar-nav d-flex align-items-center">
                <a className="nav-item nav-link" href="#">
                  About
                </a>
                <a className="nav-item nav-link" href="#">
                  Programs
                </a>
                <a className="nav-item nav-link" href="#">
                  Digital Products
                </a>
                <a className="nav-item nav-link d-none d-lg-inline" href="#">
                  <i className="bi bi-cart me-1"></i>
                </a>
              </section>

              {/* Login button */}
              <button className="login-btn btn btn-lg rounded-pill text-white fw-bold ms-lg-4" title="Login">
                Login
              </button>
            </section>
          </section>
      </nav>
      {/* Search form */}
      <form className={`d-flex flex-grow-1 position-relative ${isCollapsed ? "d-lg-none" : "d-none"}`} onSubmit={handleSearch}>
        <input
          className="form-control search-input rounded-pill px-3 vertical-align-middle my-2"
          type="search"
          placeholder="Search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="btn btn-link position-absolute top-50 end-0 translate-middle-y"><i className="bi bi-search text-primary px-1"></i></button>
      </form>
    </header>
  );
};

export default Header;