import './CustomerDetails.css';

export const CustomerDetails = ({ id, name, rewardsPoint = 0 }) => {
  return (
    <div>
      <p>
        <span className="customer-details-label">ID: </span>
        <span className="customer-details-value">{id}</span>
      </p>
      <p>
        <span className="customer-details-label">Name: </span>
        <span className="customer-details-value">{name}</span>
      </p>
      <p>
        <span className="customer-details-label">Reward Points: </span>
        <span className="customer-details-value">{rewardsPoint}</span>
      </p>
    </div>
  );
};
