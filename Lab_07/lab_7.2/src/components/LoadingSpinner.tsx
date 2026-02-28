import './LoadingSpinner.css';

const LoadingSpinner = () => {
	return (
		<div className="spinner-overlay">
			<div className="spinner"></div>
			<p style={{ marginLeft: "10px" }}>Загрузка...</p>
		</div>
	);
};

export default LoadingSpinner;