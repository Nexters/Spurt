import EditGuide from '@/components/pc/Keywords/Modals/EditGuide';
import PinGuide from '@/components/pc/Keywords/Modals/PinGuide';
import SaveGuide from '@/components/pc/Keywords/Modals/SaveGuide';
import { useState } from 'react';

const ModalTest = () => {
  const [showPin, setShowPin] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const showModal = () => {
    setShowPin(!showPin);
  };
  const showModal2 = () => {
    setShowEdit(!showEdit);
  };
  const showModal3 = () => {
    setShowSave(!showSave);
  };
  return (
    <>
      <button onClick={showModal}>PinGuide Modal</button>
      <br />
      모달 테스트 중이에영ㅂ
      <br />
      <button onClick={showModal2}>EditGuide Modal</button>
      <br />
      <button onClick={showModal3}>SaveGuide Modal</button>
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
      {showSave && (
        <SaveGuide
          setShow={() => {
            showModal3();
          }}
        ></SaveGuide>
      )}
    </>
  );
};

export default ModalTest;
