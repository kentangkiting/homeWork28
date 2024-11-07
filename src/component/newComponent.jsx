import React from "react";

const NewComponent = (props) => {
  console.log(props);
  return (
    <div>
      Ini Props title
      {props.title}
    </div>
  );
};

export default NewComponent;
