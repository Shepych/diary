import './Button.css';
import { useState } from 'react';


function Button() {
	const [text, setText] = useState('Сохранить'); // Перерендер

	const clicked = () => {
		setText('Закрыть'); // Перерендер
	};
	return (
		<>
			<button onClick={clicked} className="button accent">{text}</button>
		</>
	);
}

export default Button;