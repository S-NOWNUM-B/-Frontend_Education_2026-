import React from "react";
import ArticleManager from './ArticleManager';

const App: React.FC = () => {
	return (
		<div>
			<header>
				<h1>Article Manager</h1>
			</header>

			<main>
				<section>
					<h2>Lab_4.2</h2>
					<ArticleManager />
				</section>
			</main>
		</div>
	);
};

export default App;