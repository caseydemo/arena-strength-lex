import Image from "next/image";
import styles from "../styles/top-nav.module.css";
export default function TopNav() {
  return (
    <nav className={`navbar navbar-expand-lg ${styles.myNavbar}`}>
      <div className={`container-fluid ${styles.myContainerFluid}`}>
        <a className="navbar-brand" href="#">
          {/* https://nextjs.org/docs/pages/api-reference/components/image */}
          <Image
            src="/GYMLOGO.png"
            alt="ARENA STRENGTH AND PERFORMANCE LOGO"
            width={266}
            height={83}            
          />
        </a>
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >          
          <Image 
            className="barbell-icon" 
            src="/barbell_icon.webp"
            alt="barbell icon"
            width={35}
            height={30}
          />
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
        <ul className="navbar-nav mr-auto">
          <li className={`nav-item ${styles.myNavItem}`}>
            <a className="nav-link" href="#service-open-gym">Open Gym</a>
          </li>
          <li className={`nav-item ${styles.myNavItem}`}>
            <a className="nav-link" href="#service-group-classes">Group Classes</a>
          </li>
          <li className={`nav-item ${styles.myNavItem}`}>
            <a className="nav-link" href="#service-personal-training">Personal Training</a>
          </li>
          <li className={`nav-item ${styles.myNavItem}`}>
            <a className="nav-link" href="#service-rehab-only">Rehab Only</a>
          </li>
        </ul>
        </div>      
      </div>
    </nav>
  );
}
