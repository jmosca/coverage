import styled from "@emotion/styled";
import Result from "./Result";
import Icon from "./icons/Icon";

export function NoCoverageIcon() {
  return (
    <Icon>
      <img alt="No coverage" src={require("./icons/no_coverage.png")}></img>
    </Icon>
  );
}

export default function Fail() {
  return (
    <Result
      title="Sorry. We likely cannot provide  service at your address."
      text=""
    >
      <NoCoverageIcon />
    </Result>
  );
}
