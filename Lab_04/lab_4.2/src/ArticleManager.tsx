import React, { useState } from 'react';
import type { Article } from './types';
import AddArticle from './AddArticle';
import ArticleList from './ArticleList';

const ArticleManager: React.FC = () => {
	const [articles, setArticles] = useState<Article[]>([
		{ id: 1, title: 'Article 1', summary: 'Summary of Article 1' },
	]);

	const [title, setTitle] = useState('');
	const [summary, setSummary] = useState('');

	const handleAdd = () => {
		if (!title || !summary) return;
		const newArt: Article = { id: Date.now(), title, summary };
		setArticles([...articles, newArt]);
		setTitle(''); setSummary('');
	};

	const handleRemove = (id: number) => {
		setArticles(articles.filter(art => art.id !== id));
	};

	return (
		<div>
			<h1>Article Manager</h1>
			<AddArticle
				title={title}
				summary={summary}
				onChangeTitle={setTitle}
				onChangeSummary={setSummary}
				onAdd={handleAdd}
			/>
			<ArticleList articles={articles} onRemove={handleRemove} />
		</div>
	);
};

export default ArticleManager;