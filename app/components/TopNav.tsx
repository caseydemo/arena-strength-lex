import Image from "next/image";
import styles from "../styles/top-nav.module.css";
import Link from "next/link";
export default function TopNav() {
    return (
        <nav className={`navbar navbar-expand-lg ${styles.myNavbar}`}>
            <div className={`container-fluid ${styles.myContainerFluid}`}>
                <Link
                    href='#first-section'
                    className='navbar-brand'
                >
                    <Image
                        src='/GYMLOGO.png'
                        alt='ARENA STRENGTH AND PERFORMANCE LOGO'
                        width={266}
                        height={83}
                    />
                </Link>

                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNavDropdown'
                    aria-controls='navbarNavDropdown'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <Image
                        className='barbell-icon'
                        src='/barbell_icon.webp'
                        alt='barbell icon'
                        width={35}
                        height={30}
                    />
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end'
                    id='navbarNavDropdown'
                >
                    <ul className='navbar-nav mr-auto'>
                        <li className={`nav-item ${styles.myNavItem}`}>
                            <Link
                                href='#service-open-gym'
                                className='nav-link'
                            >
                                Open Gym
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.myNavItem}`}>
                            <Link
                                href='#service-group-classes'
                                className='nav-link'
                            >
                                Group Classes
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.myNavItem}`}>
                            <Link
                                href='#service-personal-training'
                                className='nav-link'
                            >
                                Personal Training
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.myNavItem}`}>
                            <Link
                                href='#service-rehab-only'
                                className='nav-link'
                            >
                                Rehab Only
                            </Link>
                        </li>
                        <li className={`nav-item ${styles.myNavItem}`}>
                            <Link
                                href='#contact-us-form'
                                className='nav-link'
                            >
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
