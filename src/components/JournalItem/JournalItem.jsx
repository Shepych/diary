import './JournalItem.css';

function JournalItem({ title, date, text }) {
	const formatedDate = new Intl.DateTimeFormat('ru-RU').format(date);
	return (
		<>
			<h2 className="journal-item__header">{title}</h2>
			<div className="journal-item__body">
				<span className="journal-item__date">{formatedDate}</span>
				<span className="journal-item__text">{text}</span>
			</div>
		</>
	);
}

export default JournalItem;