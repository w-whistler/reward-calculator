import './Spinner.css';

export const Spinner = () => (
  <div className='loader-overlay' data-testid="loading-spinner">
    <div className='loader-container'>
      <div className="loader" />
    </div>
  </div>
);
