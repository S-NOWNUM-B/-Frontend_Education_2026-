import React, { useState } from 'react';
import type { Article } from './types';

interface Props {
	article: Article;
	onRemove: (id: number) => void;
}

const ArticleItem: React.FC<Props> = ({ article, onRemove }) => {
	const [isOpend, setIsOpend] = useState(false);

	return (
		<li>
			<a href='#' onClick={(e) => { e.preventDefault(); setIsOpend(!isOpend); }}>{article.title}</a>
			<button onClick={() => onRemove(article.id)}>Delete</button>
			{isOpend && <p>{article.summary}</p>}
		</li>
	);
};

export default ArticleItem;