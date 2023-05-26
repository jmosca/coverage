import styled from "@emotion/styled";
import CoverageCard from "./CoverageCard";
import { useCallback } from "react";

type Props = {
  title: string;
  text: string;
  children: React.ReactNode;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
`;

const Text = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #686d79;
  padding: 8px;
`;

export default function Result({ title, text, children }: Props) {
  const paragraphs = useCallback(() => {
    return text.split("\n").map((t) => <Text>{t}</Text>);
  }, [text]);

  return (
    <CoverageCard>
      <Container>
        {children}
        <Content>
          <Title>{title}</Title>
          {[...paragraphs()]}
        </Content>
      </Container>
    </CoverageCard>
  );
}
