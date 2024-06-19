import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';

function JournalForm({ onSubmit }) {
	const [inputData, setInputData] = useState('');

	const inputChange = (event) => {
		setInputData(event.target.value);
	};

	const addJournalItem = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		const formProps = Object.fromEntries(formData);
		console.log(formProps);
		onSubmit(formProps);
	};

	return (
		<form className='journal-form' onSubmit={addJournalItem}>
			<input type="text" name="title" value={inputData} onChange={inputChange}/>
			<input type="date" name="date"/>
			<input type="text" name="tag"/>
			<textarea className='journal-form__textarea' name="text"></textarea>
			<Button/>
		</form>
	);
}

export default JournalForm;