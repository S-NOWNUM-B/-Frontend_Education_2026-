import React from 'react';

interface Props {
	title: string;
	summary: string;
	onChangeTitle: (val: string) => void;
	onChangeSummary: (val: string) => void;
	onAdd: () => void;
}

const AddArticle: React.FC<Props> = ({ title, summary, onChangeTitle, onChangeSummary, onAdd }) => (
	<section>
		<h2>Add Article</h2>
		<input placeholder='Title' value={title} onChange={(e) => onChangeTitle(e.target.value)} />
		<input placeholder='Summary' value={summary} onChange={(e) => onChangeSummary(e.target.value)} />
		<button onClick={onAdd}>Add</button>
	</section>
);

export default AddArticle;