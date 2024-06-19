import './Header.css';
import Logo from '../../../public/svg/logo.svg';

function Header() {
	return (
		<div className='header'>
			<img src={Logo} alt="Логотип" />
		</div>
	);
}

export default Header;