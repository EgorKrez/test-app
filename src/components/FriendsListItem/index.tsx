import { FriendProps } from "../FriendsList";
import "../../App.css";
import { useNavigate } from "react-router-dom";

type Props = {
  data: FriendProps;
};

const mockImage =
  "https://s3-alpha-sig.figma.com/img/9673/1f6a/bbd65182e7243a55d381e3bca43efbea?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGaJjU~8OfS6ALF449Jo4W9TE4DS0s4MungKTRGmi7qVIBbG-tcm61~lJGxZ0BxFOPi69l8bqEJ3AMyf78KVsk-v6IcFcqxovtIPdsffdWJoE~wz18KUZ4pqQ-JYSZIXuMrW82W970nkHqPKGAC3hPLWYiQb2NNIbFEJk9B7bRCh~Sqg6uf0uGX4l4lJnUNxXhVOPxuCEupxr9neKnnNC1TieT1v7-tHaLjtCrDO62YUqaf45RgLiq0Lt6ohl0nQlT5SaiNspOspoyVmCkuN9SWwEKFLG4yw75cCqZGP0t9BnW2HNawVhxaKNcf7kXHUAnWjoOxvTowGnW1DnT8rNQ__";

const FriendsListItem = (props: Props) => {
  const { data } = props;
  const navigate = useNavigate();

  const openDetails = () => {
    navigate("/details");
  };

  return (
    <div className="friends-list-item">
      <div className="friends-list-item-info">
        <div style={{ position: "relative" }}>
          <img src={mockImage ?? data.img} alt="img" />
          <div
            className={
              data.available
                ? "available-status available"
                : "available-status not-available"
            }
          />
        </div>
        <div>
          <h2>{data.first_name + " " + data.last_name}</h2>
          <div className="friends-list-item-info-button">{data.status}</div>
        </div>
      </div>
      <button onClick={openDetails}>Details</button>
    </div>
  );
};

export default FriendsListItem;
