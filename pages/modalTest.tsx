import BackGuide from '@/components/pc/Modals/BackGuide';
import DeleteGuide from '@/components/pc/Modals/DeleteGuide';
import EditGuide from '@/components/pc/Modals/EditGuide';
import PinGuide from '@/components/pc/Modals/PinGuide';
import SaveGuide from '@/components/pc/Modals/SaveGuide';
import { useState } from 'react';

const ModalTest = () => {
  const [showPin, setShowPin] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSave, setShowSave] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const showModal = () => {
    setShowPin(!showPin);
  };
  const showModal2 = () => {
    setShowEdit(!showEdit);
  };
  const showModal3 = () => {
    setShowSave(!showSave);
  };
  const showModal4 = () => {
    setShowDel(!showDel);
  };
  const showModal5 = () => {
    setShowBack(!showBack);
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <button onClick={showModal}>PinGuide Modal</button>
      <br />
      모달 테스트 중이에영ㅂ
      <br />
      <button onClick={showModal2}>EditGuide Modal</button>
      <br />
      <button onClick={showModal3}>SaveGuide Modal</button>
      <br />
      <button onClick={showModal4}>DeleteGuide Modal</button>
      <br />
      <button onClick={showModal5}>BackGuide Modal</button>
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
      {showDel && (
        <DeleteGuide
          setShow={() => {
            showModal4();
          }}
          option={() => {
            showModal4();
          }}
        ></DeleteGuide>
      )}
      {showBack && (
        <BackGuide
          setShow={() => {
            showModal5();
          }}
        ></BackGuide>
      )}
    </div>
  );
};

export default ModalTest;
