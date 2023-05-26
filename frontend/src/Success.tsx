import Result from "./Result";
import Icon from "./icons/Icon";

export function CoverageIcon() {
  return (
    <Icon>
      <img alt="Coverage" src={require("./icons/coverage.png")}></img>
    </Icon>
  );
}

export default function Success() {
  const text = `Great news! We have strong coverage in your area.
That means with our landline phone service, you can make unlimited nationwide calls in the US with your landline phone for just $39/month*`;

  return (
    <Result title="We have coverage at your address!" text={text}>
      <CoverageIcon />
    </Result>
  );
}
