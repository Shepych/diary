import './JournalList.css';
import CardButton from '../CardButton/CardButton';
import JournalItem from '../JournalItem/JournalItem';

function JournalList({ items }) {

	if(items.length === 0) {
		return <p>Заметки отсутствуют</p>;
	}

	const sortItems = (a, b) => {
		if (a.date < b.date) {
			return 1;
		} else {
			return -1;
		}
	}

	return <div className='journal-list'>{
		items.sort(sortItems).map(el => (
			
				<CardButton key={el.id}>
					<JournalItem 
						title={el.title}
						date={el.date}
						text={el.text}
					/>
				</CardButton>
			
		))
	}
	</div>
	// return (
	// 	<div className='journal-list'>
	// 		{ children }
	// 	</div>
	// );
}

export default JournalList;