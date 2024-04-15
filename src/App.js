import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ListCustomerPage from "./pages/ListCustomerPage"
import AddNewCustomerPage from "./pages/AddNewCustomerPage"
import "bootstrap/dist/css/bootstrap.min.css"
import CustomerContextData from "./CustomerContext"

export default function App() {
  return (
    <Router>
      <div className="container">

        {/* Navbar */}
        <nav className="navbar navbar-expand-sm bg-light">

          <div className="container-fluid">

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">All Customers</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/add">Add New</Link>
              </li>
            </ul>
          </div>
        </nav>
        <CustomerContextData>
          <Routes>
            <Route path="/" element={<ListCustomerPage />} />
            <Route path="/add" element={<AddNewCustomerPage />} />
          </Routes>
        </CustomerContextData>
      </div>
    </Router>
  )
}