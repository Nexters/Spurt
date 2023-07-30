import EditGuide from '@/components/pc/Keywords/Modals/EditGuide';
import PinGuide from '@/components/pc/Keywords/Modals/PinGuide';
import { useState } from 'react';

const ModalTest = () => {
  const [showPin, setShowPin] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const showModal = () => {
    setShowPin(!showPin);
  };
  const showModal2 = () => {
    setShowEdit(!showEdit);
  };
  return (
    <>
      <button onClick={showModal}>PinGuide Modal</button>
      <br />
      모달 테스트 중이에영ㅂ
      <br />
      <button onClick={showModal2}>EditGuide Modal</button>
      <br />
      {showPin && (
        <PinGuide
          setShow={() => {
            showModal();
          }}
        ></PinGuide>
      )}
      {showEdit && (
        <EditGuide
          setShow={() => {
            showModal2();
          }}
        ></EditGuide>
      )}
    </>
  );
};

export default ModalTest;
