// import "./List.css";

const List = (props) => {
  return (
    <div className="list-box">
      <ul>
        {props.list.map((obj, index) => {
          return (
            <div className="list" key={index}>
              <li>{obj}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
