import ModalWindow from "../ModalWindow";
import { useState } from "react";

type Props = {
  images: string[];
};

const mockImage =
  "https://s3-alpha-sig.figma.com/img/9673/1f6a/bbd65182e7243a55d381e3bca43efbea?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGaJjU~8OfS6ALF449Jo4W9TE4DS0s4MungKTRGmi7qVIBbG-tcm61~lJGxZ0BxFOPi69l8bqEJ3AMyf78KVsk-v6IcFcqxovtIPdsffdWJoE~wz18KUZ4pqQ-JYSZIXuMrW82W970nkHqPKGAC3hPLWYiQb2NNIbFEJk9B7bRCh~Sqg6uf0uGX4l4lJnUNxXhVOPxuCEupxr9neKnnNC1TieT1v7-tHaLjtCrDO62YUqaf45RgLiq0Lt6ohl0nQlT5SaiNspOspoyVmCkuN9SWwEKFLG4yw75cCqZGP0t9BnW2HNawVhxaKNcf7kXHUAnWjoOxvTowGnW1DnT8rNQ__";

const PhotosTab = (props: Props) => {
  const { images } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const onClose = () => {
    setIsOpen(false);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  console.log(images);

  return (
    <div className="photos-tab-wrapper">
      {images.map((item, index) => (
        <img
          src={item}
          key={index}
          className="photos-tab-wrapper-image"
          onClick={onOpen}
          alt="img"
        />
      ))}
      {isOpen && <ModalWindow onClose={onClose} image={mockImage} />}
    </div>
  );
};

export default PhotosTab;
