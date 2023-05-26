import styled from "@emotion/styled";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

/* The Modal (background) */
const Modal = styled.div`
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
`;

const ModalContent = styled.div`
  background-color: #fefefe;
  margin: 15% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 80%; /* Could be more or less, depending on screen size */
`;

export default function Dialog({ children, onClose }: Props) {
  return (
    <Modal>
      <ModalContent>{children}</ModalContent>
      <button onClick={onClose}>Close</button>
    </Modal>
  );
}