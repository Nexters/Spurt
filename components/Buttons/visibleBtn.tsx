import VisibleIcon from '../../img/visible.svg';
import InVisibleIcon from '../../img/invisible.svg';

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
