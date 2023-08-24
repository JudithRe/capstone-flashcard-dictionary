import styled from "styled-components";
import { device } from "@/utils/globalValues";

function PieChart({ inputArray, unit, height }) {
  const data = [
    { value: 45, color: "red" },
    { value: 20, color: "blue" },
    { value: 15, color: "green" },
    { value: 10, color: "yellow" },
    { value: 5, color: "orange" },
    { value: 5, color: "purple" },
  ];

  const total = data.reduce((acc, item) => acc + item.value, 0);

  let startAngle = 0;

  return (
    <PieChartContainer>
      {data.map((item, index) => {
        const slicePercentage = (item.value / total) * 100;
        const sliceRotation = startAngle;
        startAngle += (360 * slicePercentage) / 100;
        const cx = Math.cos(((startAngle - 90) * Math.PI) / 180) * 50 + 50;
        const cy = Math.sin(((startAngle - 90) * Math.PI) / 180) * 50 + 50;

        return (
          <Slice
            key={index}
            rotate={sliceRotation}
            color={item.color}
            cx={cx}
            cy={cy}
          >
            <PercentageLabel>{`${slicePercentage.toFixed(
              2
            )}%`}</PercentageLabel>
          </Slice>
        );
      })}
    </PieChartContainer>
  );
}

const PieChartContainer = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
`;

const Slice = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  clip-path: ${(props) => `polygon(50% 50%, 100% 100%, 100% 0)`};
  transform: ${(props) => `rotate(${props.rotate}deg)`};
  transform-origin: 100% 100%;
  background-color: ${(props) => props.color};
`;

const PercentageLabel = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 12px;
  color: white;
`;

export default PieChart;
