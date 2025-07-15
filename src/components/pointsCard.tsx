import { useState } from "react";

type PointCardProps = {
  points: number;
};
// const MyCard = ({ title, content }: CardProps) => {
// start of functions
const Points_Card = ({ points }: PointCardProps) => {
  return (
    <>
      {/* <div onClick={editPoints}> */}
      <div>
        <h3 id="current-points">{points}</h3>
      </div>
    </>
  );
};

export default Points_Card;
