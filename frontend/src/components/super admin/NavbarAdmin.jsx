import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "../../service/authservice";

const NavbarAdmin = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logoutUser();
      navigate('/'); // Arahkan ke halaman login setelah logout
    } catch (error) {
      console.error("Gagal logout:", error);
    }
  };

  return (
    <div className="container-fluid sticky-top bg-white shadow-sm">
      <div className="container">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0">
          <a href="index.html" className="navbar-brand">
            <h1 className="m-0 text-uppercase text-primary">
              <i className="fa fa-clinic-medical me-2"></i>Sahabat Sehat
            </h1>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse show" id="navbarCollapse">
            <div className="navbar-nav ms-auto py-0">
              <Link to="/dashboardAdmin" className="nav-item nav-link">
                dashboard
              </Link>
              <Link to="/halamanDokter" className="nav-item nav-link">
                Data Dokter
              </Link>
              <Link to="/ObatAdmin" className="nav-item nav-link">
                Data Obat
              </Link>
              <Link to="/PerawatAdmin" className="nav-item nav-link">
                Data Perawat
              </Link>
              <Link to="/PasienAdmin" className="nav-item nav-link">
                Data Pasien
              </Link>
             
              <button onClick={handleLogout} className="nav-item nav-link btn btn-link">
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavbarAdmin;
