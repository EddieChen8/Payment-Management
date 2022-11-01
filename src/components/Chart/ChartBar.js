import "./ChartBar.css";

const ChartBar = (props) => {
  let dataFillHeight = "0%";

  if (props.maxValue > 0) {
    dataFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="ChartBar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: dataFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
