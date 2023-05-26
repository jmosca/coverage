import styled from "@emotion/styled";
import CoverageCard from "./CoverageCard";

type Props = {
  title: string;
};

const Dot = styled.span<{ color: string }>`
  height: 8px;
  width: 8px;
  background-color: ${(props) => props.color};
  border-radius: 50%;
  display: inline-block;
  margin: 8px;
`;

const Container = styled(CoverageCard)`
  align-items: center;
  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

const Label = styled.h3`
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  color: #686d79;
`;

export default function Loading({ title }: Props) {
  return (
    <Container>
      <Label>{title}</Label>
      <div>
        <Dot color="#0075FF"></Dot>
        <Dot color="#00CFFF"></Dot>
        <Dot color="#3D30EE"></Dot>
      </div>
    </Container>
  );
}
