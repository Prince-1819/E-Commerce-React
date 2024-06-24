import React from 'react'
import styles from '../CSS Module/Contact.module.css'

const Contact = () => {
    return (
        <div className={`${styles.containerMain}`}>

            <div className={`card ${styles.main}`}>
                <div className="card-body">
                    <h2 className='text-center mb-3'>Contact Us</h2>
                    <h5 class="card-title ms-2">Prince Shah</h5>
                    <h6 class="card-subtitle mb-2 text-muted text-light">Software Engineer</h6>

                    <ul className="nav col-md-5 justify-content-end list-unstyled d-flex m-auto">
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
                        <li className="me-4">
                            <a className="text-body-secondary" target='_blank' href="mailto:prince@example.com?subject=Hello&body=Hi there!">
                                <i class="bi bi-envelope" style={{ fontSize: "30px" }}></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}

export default Contact