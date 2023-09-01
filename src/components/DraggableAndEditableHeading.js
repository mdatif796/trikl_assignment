import { useState } from "react";
import Draggable from "react-draggable";
const DraggableAndEditableHeading = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("Edit Me");

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event) => {
    setText(event.target.value);
  };
  return (
    <Draggable>
      <h1
        style={{ cursor: "move" }}
        onDoubleClick={handleDoubleClick}
        onBlur={handleBlur}
        contentEditable={isEditing}
        onChange={handleChange}
        className="text-6xl text-center"
      >
        {text}
      </h1>
    </Draggable>
  );
};

export default DraggableAndEditableHeading;
