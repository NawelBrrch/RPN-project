import React from "react";

export interface Props {
  onClick: (number: number) => void;
  number: number;
}

const Component: React.FunctionComponent<Props> = ({ number, onClick }) => {
  return <button onClick={() => onClick(number)}>{number}</button>;
};

export default Component;
