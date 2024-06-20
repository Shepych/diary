import './App.css';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	// {
	// 	id: 1,
	// 	title: 'Подготовка к обновлению курсов',
	// 	date: new Date(),
	// 	text: 'Сегодня провёл весь день за...'
	// },
	// {
	// 	id: 2,
	// 	title: 'Поход в годы',
	// 	date: new Date(),
	// 	text: 'Думал, что очень много време...'
	// },
	// {
	// 	id: 3,
	// 	title: 'Первая заметка',
	// 	date: new Date(),
	// 	text: 'Создал первую заметку, чтобы ...'
	// }
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date),
			id: Math.max(...oldItems.map(i => i.id)) + 1
		}]);
	};

	return (
		<>
			<LeftPanel>
				<Header/>
				<JournalAddButton>
					Новое воспоминание
				</JournalAddButton>
				<JournalList items={items}/>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</>
	);
}

export default App;
