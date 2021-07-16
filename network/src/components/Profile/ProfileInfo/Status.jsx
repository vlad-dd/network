import "../../../styles/Status.css";

const Status = (props) => {
  return (
    <div>

      <div>
        <span>{props.status}</span>
      </div>

      <div>
        <input value = {props.status}/>
      </div>

    </div>
  );
};

export default Status;
