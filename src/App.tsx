import { useState } from 'react'
import Navbar from './components/Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body text-center">
                <h1 className="card-title display-4 text-primary mb-4">
                  Welcome to ImageHub
                </h1>
                <div className="mb-4">
                  <button 
                    className="btn btn-primary btn-lg me-2" 
                    onClick={() => setCount((count) => count + 1)}
                  >
                    Count is {count}
                  </button>
                  <button 
                    className="btn btn-outline-secondary" 
                    onClick={() => setCount(0)}
                  >
                    Reset
                  </button>
                </div>
                <div className="alert alert-info" role="alert">
                  <strong>Navbar with search functionality added!</strong> Use the search bar to find images
                </div>
                <p className="text-muted">
                  Explore our image gallery with powerful search and categorization features
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App