const ErrorMessage = ({ error, onRetry }) => (
    <>
        <h1>❌ {error}</h1>
        <button onClick={onRetry}>Tentar Novamente</button>
    </>
);

export default ErrorMessage;
