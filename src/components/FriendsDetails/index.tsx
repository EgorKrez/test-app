import BackIconSvg from "../../shared/svg/back-icon.svg";
import { useEffect, useState } from "react";
import "../../App.css";
import FriendsDetailsTabs from "../FriendsDetailsTabs";
import { useNavigate } from "react-router-dom";

export type DataProps = {
  id: number;
  img: string;
  first_name: string;
  last_name: string;
  phone: string;
  address_1: string;
  city: string;
  state: string;
  zipcode: string;
  bio: string;
  photos: string[];
  statuses: string[];
  available: boolean;
};

const mockImage =
  "https://s3-alpha-sig.figma.com/img/9673/1f6a/bbd65182e7243a55d381e3bca43efbea?Expires=1733702400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=eGaJjU~8OfS6ALF449Jo4W9TE4DS0s4MungKTRGmi7qVIBbG-tcm61~lJGxZ0BxFOPi69l8bqEJ3AMyf78KVsk-v6IcFcqxovtIPdsffdWJoE~wz18KUZ4pqQ-JYSZIXuMrW82W970nkHqPKGAC3hPLWYiQb2NNIbFEJk9B7bRCh~Sqg6uf0uGX4l4lJnUNxXhVOPxuCEupxr9neKnnNC1TieT1v7-tHaLjtCrDO62YUqaf45RgLiq0Lt6ohl0nQlT5SaiNspOspoyVmCkuN9SWwEKFLG4yw75cCqZGP0t9BnW2HNawVhxaKNcf7kXHUAnWjoOxvTowGnW1DnT8rNQ__";

const FriendsDetails = () => {
  const [data, setData] = useState<DataProps>();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://private-5bdb3-friendmock.apiary-mock.com/friends/id")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setData(data);
        });
    };

    fetchData();
  }, []);

  const backToHome = () => {
    navigate("/");
  };

  return (
    <div className="details-page">
      <div className="back-to-home-button" onClick={backToHome}>
        <img src={BackIconSvg} alt="back" />
      </div>
      <div style={{ position: "relative", width: 150, height: 150 }}>
        <img
          src={mockImage ?? data?.img}
          alt="img"
          className="details-page-image"
        />
        <div
          className={
            data?.available
              ? "details-available-status available"
              : "details-available-status not-available"
          }
        />
      </div>
      {data?.first_name && data?.last_name && (
        <h1>{data?.first_name + " " + data?.last_name}</h1>
      )}
      {data?.statuses?.[0] && (
        <div className="friends-list-item-info-button">
          {data?.statuses?.[0]}
        </div>
      )}
      {data && <FriendsDetailsTabs data={data} />}
    </div>
  );
};

export default FriendsDetails;
