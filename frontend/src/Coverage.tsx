import styled from "@emotion/styled";
import { ChangeEvent, useEffect, useState } from "react";
import Loading from "./Loading";
import CoverageCard from "./CoverageCard";
import Success from "./Success";
import Fail from "./Fail";
import Dialog from "./Dialog";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const ZipContainer = styled(CoverageCard)`
  background-color: #f9f9fa;
`;

const Title = styled.h2`
  font-size: 30px;
  font-weight: 600;
`;

const Label = styled.h3`
  width: 100%;
  margin-top: 0px;
  font-size: 16px;
  font-weight: 600;
  padding-left: 48px;
`;

const ZipCodeInput = styled.input`
  border: 1px solid #e8e7ec;
  padding: 32px;
  color: #9e9ea2;
  font-size: 16px;
  font-weight: 600;
`;

export default function Coverage() {
  const [loading, setLoading] = useState(false);
  const [zipCode, setZipCode] = useState(0);
  const [showDialog, setShowDialog] = useState(false);
  const [hasCoverage, setHasCoverage] = useState<boolean | undefined>(
    undefined
  );

  useEffect(() => {
    if (zipCode.toString().length === 5) {
      (async () => {
        setLoading(true);
        setHasCoverage(undefined);
        const response = await fetch(`/api/coverage/${zipCode}`);
        const data = await response.json();
        setHasCoverage(data.coverage);
        setLoading(false);
      })();
    }
  }, [zipCode]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const re = /^[0-9\b]+$/;
    if (e.target.value === "") {
      setZipCode(0);
    } else if (re.test(e.target.value)) {
      setZipCode(parseInt(e.target.value));
    }
  };

  return (
    <Container>
      <Title>Check coverage at your address</Title>
      <ZipContainer>
        <Label>Enter your zip code</Label>
        <ZipCodeInput value={zipCode} onChange={handleChange}></ZipCodeInput>
      </ZipContainer>
      {loading && <Loading title="Checking coverage at your address" />}
      {hasCoverage === true && <Success />}
      {hasCoverage === false && <Fail />}
      <button onClick={() => setShowDialog(true)}>Show dialog</button>
      {showDialog && (
        <Dialog onClose={() => setShowDialog(false)}>
          <div>Content</div>
        </Dialog>
      )}
    </Container>
  );
}
