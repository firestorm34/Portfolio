import { NavLink } from 'react-router-dom';
import BtnDarkMode from "./BtnDarkMode";


const Navbar = () => {
	const activeLink = 'nav-list__link nav-list__link--active';
	const normalLink = 'nav-list__link';

	return (
		<nav className="nav">
			<div className="container">
				<div className="nav-row">
					<NavLink to="/" className="logo">
						<strong>MyPortfolio</strong> 
					</NavLink>

					

					<ul className="nav-list">
						<li className="nav-list__item">
							<NavLink
								to="/"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Home
							</NavLink>
						</li>

						<li className="nav-list__item">
							<NavLink
								to="/projects"
								className={({ isActive }) =>
									isActive ? activeLink : normalLink
								}
							>
								Projects
							</NavLink>
						</li>
				
						<BtnDarkMode color="black"></BtnDarkMode>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
