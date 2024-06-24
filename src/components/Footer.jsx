import React from 'react'
import "bootstrap-icons/font/bootstrap-icons.css";

const Footer = () => {
    return (
        <div className="container" style={{ height: "100px" }}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><use xlinkHref="#bootstrap"></use></svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Prince Shah</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="me-4">
                        <a className="text-body-secondary" target='_blank' href="https://github.com/Prince-1819">
                            <i className="bi bi-github" style={{ fontSize: "30px" }}></i>
                        </a>
                    </li>
                    <li className="me-4">
                        <a className="text-body-secondary" href="#">
                            <i className="bi bi-instagram" style={{ fontSize: "30px" }}></i>
                        </a>
                    </li>
                    <li className="me-4">
                        <a className="text-body-secondary" target='_blank' href="https://www.linkedin.com/in/prince-shah-15b915201">
                            <i className="bi bi-linkedin" style={{ fontSize: "30px" }}></i>
                        </a>
                    </li>
                </ul>
            </footer>
        </div>
    )
}

export default Footer
