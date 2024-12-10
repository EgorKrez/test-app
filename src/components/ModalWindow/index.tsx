import CloseSvg from "../../shared/svg/close-button.svg";

type Props = {
  onClose: () => void;
  image: string;
};

const ModalWindow = (props: Props) => {
  const { onClose, image } = props;

  return (
    <div className="modal-wrapper">
      <div className="modal-wrapper-close-button" onClick={onClose}>
        <img src={CloseSvg} alt="close" />
      </div>
      <img className="modal-wrapper-image" src={image} alt="img"></img>
    </div>
  );
};

export default ModalWindow;
