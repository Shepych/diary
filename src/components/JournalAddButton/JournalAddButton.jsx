import CardButton from '../CardButton/CardButton';
import './JournalAddButton.css';
import PlusIcon from '../../../public/svg/plus.svg';

function JournalAddButton() {
	return (
		<CardButton 
			className="journal-add"
		>
			<img src={PlusIcon}/> Новое событие
		</CardButton>
	);
}

export default JournalAddButton;