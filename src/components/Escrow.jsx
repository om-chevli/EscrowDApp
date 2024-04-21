import "../App.css"
export default function Escrow({
  address,
  broker,
  beneficiary,
  value,
  handleApprove,
}) {
  return (
    <div className="existing-contract">
      <ul className="fields">
        <li>
          <div> Broker </div>
          <div> {broker} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> {beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> {value} </div>
        </li>
        <div
          className="button"
          id={address}
          onClick={(event) => {
            event.preventDefault();
            handleApprove();
          }}
        >
          Approve Transfer of Funds
        </div>
      </ul>
    </div>
  );
}
