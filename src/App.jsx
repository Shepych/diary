import './App.css';
import CardButton from './components/CardButton/CardButton';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import Body from './layouts/Body/Body';
import Header from './components/Header/Header';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	{
		title: 'Подготовка к обновлению курсов',
		date: new Date(),
		text: 'Сегодня провёл весь день за...'
	},
	{
		title: 'Поход в годы',
		date: new Date(),
		text: 'Думал, что очень много време...'
	},
	{
		title: 'Первая заметка',
		date: new Date(),
		text: 'Создал первую заметку, чтобы ...'
	}
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);

	const addItem = item => {
		setItems(oldItems => [...oldItems, {
			title: item.title,
			text: item.text,
			date: new Date(item.date)
		}]);
	};

	return (
		<>
			<LeftPanel>
				<Header/>
				<JournalList>
					<JournalAddButton>
						Новое воспоминание
					</JournalAddButton>
					{items.map(el => (
						<CardButton>
							<JournalItem 
								title={el.title}
								date={el.date}
								text={el.text}
							/>
						</CardButton>
					))}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
		</>
	);
}

export default App;
