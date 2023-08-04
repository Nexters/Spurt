import VisibleIcon from '@/img/eye-on-40.svg';
import InVisibleIcon from '@/img/eye-off-40.svg';

interface VisibleProps {
  isVisible: boolean;
  setVisibility: (value: boolean) => void;
}

const VisibleBtn = ({ isVisible, setVisibility: setVisible }: VisibleProps) => {
  return (
    <>
      {isVisible == true ? (
        <button onClick={() => setVisible(!isVisible)}>
          <VisibleIcon></VisibleIcon>
        </button>
      ) : (
        <button onClick={() => setVisible(!isVisible)}>
          <InVisibleIcon></InVisibleIcon>
        </button>
      )}
    </>
  );
};

export default VisibleBtn;
