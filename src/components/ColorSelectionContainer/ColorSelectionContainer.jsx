import { useContext, useState } from "react";
import { BackgroundContext } from "../../Context/BackgroundContext/BackgroundContext";
import "./ColorSelectionContainer.css";

const ColorSelectionContainer = () => {
  const [selected, setSelected] = useState(1);
  const [show, setShow] = useState(true);
 
  const color = ["yellow", "blue", "green", "orange", "red"];
  const { dispatch } = useContext(BackgroundContext);

  const handleClick = (i, item) => {
    setSelected(i);
    dispatch({ type: item });
  };
  return (
    <div className="ColorSelectionContainer" >
      <i className="fa-solid fa-gear" onClick={() => setShow(!show)}></i>

      <div className={show ? "show" : "hidden"}>
            <div className="right-arrow"></div>
            <div className="color-panel">
            <h4>sidebar background</h4>
            <div className="colors-list">
                {color.map((item, i) => {
                return (
                    <div
                    className={selected === i ? "color active" : "color"}
                    onClick={() => handleClick(i, item)}
                    key={i}
                    ></div>
                );
                })}
            </div>
            <div className="buttons">
                <button className="btn btn-large"> Buy pro</button>
                <button className="btn btn-large"> Download free</button>
                <button className="btn btn-large"> Documations</button>
            </div>

            <h4>Thank your for sharing</h4>
            </div>
      </div>
    </div>
  );
};

export default ColorSelectionContainer;
