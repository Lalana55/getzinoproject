import React, { useState } from "react";

function AddDynamicInput({ val, setVal, color, colorText }) {
  const handleAdd = () => {
    if (val.length < 7) {
      const abc = [...val, ["Enter"]];
      setVal(abc);
    }
  };
  const handleChange = (onChangeValue, i) => {
    const inputdata = [...val];
    inputdata[i] = onChangeValue.target.value;
    setVal(inputdata);
  };
  const handleDelete = (i) => {
    const deletVal = [...val];
    deletVal.splice(i, 1);
    setVal(deletVal);
  };
  //save reference for dragItem and dragOverItem
  const dragItem = React.useRef();
  const dragOverItem = React.useRef();
  const handleSort = () => {
    //duplicate items
    let _cardItems = [...val];

    //remove and save the dragged item content
    const draggedItemContent = _cardItems.splice(dragItem.current, 1)[0];

    //switch the position
    _cardItems.splice(dragOverItem.current, 0, draggedItemContent);

    //reset the position ref
    dragItem.current = null;
    dragOverItem.current = null;

    //update the actual array
    setVal(_cardItems);
  };

  console.log(val, "data-");
  return (
    <div>
      <div className="buttonA">
        <h2 className="textA">{colorText}</h2>
        <button onClick={() => handleAdd()}>
          <h2>Add</h2>{" "}
        </button>
      </div>
      <div>
        {val.map((data, i) => {
          return (
            <div
              className="mainA"
              draggable
              onDragStart={(e) => {
                dragItem.current = i;
                console.log(i, e);
              }}
              onDragEnter={(e, index) => (dragOverItem.current = i)}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <input
                value={data}
                onChange={(e) => handleChange(e, i)}
                //   style={{ backgroundColor: { color } }}
                style={{
                  backgroundColor: color,
                  width: "100%",
                  height: "100%",
                  fontSize: "36px",
                  paddingLeft: "38px",
                }}
              />
              <button onClick={() => handleDelete(i)} className="deleteA">
                x
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default React.memo(AddDynamicInput);
