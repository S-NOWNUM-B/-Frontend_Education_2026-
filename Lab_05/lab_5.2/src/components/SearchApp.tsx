import React, { useState } from 'react';
import type { User } from '../types';
import UserCard from './UserCard';

const INITIAL_USERS: User[] = [
	{ name: 'Alice', email: 'alice@example.com', age: 25 },
	{ name: 'Bob', email: 'bob@example.com', age: 30 },
	{ name: 'Charlie', email: 'charlie@example.com', age: 35 },
];

const SearchApp = () => {
	const [users] = useState<User[]>(INITIAL_USERS);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_USERS);

	const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSearchTerm(value);

		const filtered = users.filter(user =>
			user.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredUsers(filtered);
	};

	const handleClear = () => {
		setSearchTerm('');
		setFilteredUsers(users);
	};

	return (
		<div>
			<input
				type='text'
				value={searchTerm}
				onChange={handleSearch}
				placeholder='Поиск пользователя...'
			/>
			<button onClick={handleClear}>Очистить</button>

			<div>
				{filteredUsers.length > 0 ? (
					filteredUsers.map((u, idx) => (
						<div key={idx}>
							<UserCard user={u} isActive={false} children={undefined} />
							<p>Найден пользователь: {u.name}</p>
						</div>
					))
				) : (
					<p>Пользователь не найден</p>
				)}
			</div>
		</div>
	);
};

export default SearchApp;