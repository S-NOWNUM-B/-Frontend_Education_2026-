import { useState } from 'react';

function Counter() {
	const [count, setCount] = useState(0);

	const handleIncrement = () => {
		setCount(count + 1);
	};

	const handleDecrement = () => {
		setCount(count - 1);
	};

	return (
		<div style={{ border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
			<h2>Текущее значение: {count}</h2>
			<button onClick={handleIncrement} style={{ marginRight: '10px' }}>Увеличить</button>
			<button onClick={handleDecrement}>Уменьшить</button>
		</div>
	);
}

export default Counter;