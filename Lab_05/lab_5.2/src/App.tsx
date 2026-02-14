import SearchApp from './components/SearchApp';
import SkillList from './components/SkillList';
import UserCard from './components/UserCard';

import type { User, Skill } from './types';

const App = () => {
	const exempleUser: User = {name: 'John Doe', email: 'john@example.com', age: 25};
	const exempleSkills: Skill[] = [
		{id: 1, name: 'JavaScript', level: 'Advanced'},
		{id: 2, name: 'TypeScript', level: 'Intermediate'},
		{id: 3, name: 'React', level: 'Advanced'},
	];
	
	return (
		<div>
			<h1>Lab_5.2</h1>
			<section>
				<h2>Search App</h2>
				<UserCard user={exempleUser} isActive={true}>
					<p>Дополнительная информация о пользователе</p>
					<SkillList skills={exempleSkills} />
				</UserCard>
			</section>

			<hr />

			<section>
				<h2>Skills List</h2>
				<SearchApp />
			</section>
		</div>
	);
};

export default App;