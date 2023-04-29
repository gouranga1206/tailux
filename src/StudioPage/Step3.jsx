import Header from "../Components/Header";
import Banner from "../Components/Banner";
import Tag from "../Components/Tag";
import Footer from "../Components/Footer";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Step3() {
  const navigate = useNavigate();
  const Previous = useNavigate();

  const colors = [
    "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "d10", "d11", "d12", "d13", "d14", "d15", "d16", "d17", "d18"
  ];

  const [selectedColor, setSelectedColor] = useState(null);

  const colorCells = [];
  colors.forEach((colorClass, index) => {
    colorCells.push(
      <td key={index}>
        <div
          className={`color ${colorClass} ${selectedColor === colorClass ? 'selected' : ''}`}
          onClick={handleClick}
          onDoubleClick={handleDoubleClick}
        ></div>
      </td>
    );
  });
  return (
    <>
      <Header />
      <Banner />
      <Tag />
      <div id="c"></div>
      <div id="Content">
        <h1>Select Color</h1>
        <h3>Darks</h3>
        <div className="darks">
          <table>
            <tbody>
              <tr>{colorCells.slice(0, 9)}</tr>
            </tbody>
            <tbody>
              <tr>{colorCells.slice(9)}</tr>
            </tbody>
          </table>
        </div>
        <h3>Classics</h3>
        <div className="darks">
          <table>
            <tbody>
              <tr>{colorCells.slice(0, 9)}</tr>
            </tbody>
            <tbody>
              <tr>{colorCells.slice(9)}</tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        id="previous"
        onClick={() => Previous("/step2")}
        style={{
          marginTop: "30vh",
        }}
      >
        Previous
      </button>
      <button id="next" onClick={() => navigate("/step4a")}>
        Next
      </button>
      <Footer />
    </>
  );
}


function handleClick(event) {
  const element = event.target;
    element.style.outline = '6px solid';
  
}

function handleDoubleClick(event) {
  const element = event.target;
  element.style.outline = 'none';
}
