import React from 'react';
import type { Article } from './types';
import ArticleItem from './ArticleItem';

interface Props {
	articles: Article[];
	onRemove: (id: number) => void;
}

const ArticleList: React.FC<Props> = ({ articles, onRemove }) => {
	return (
		<ul>
			{articles.map(art => (
				<ArticleItem key={art.id} article={art} onRemove={onRemove} />
			))}
		</ul>
	);
};

export default ArticleList;