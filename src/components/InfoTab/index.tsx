import { DataProps } from "../FriendsDetails";

type Props = {
  data: DataProps;
};

const InfoTab = (props: Props) => {
  const { data } = props;

  return (
    <div className="info-tab">
      <h3>Bio:</h3>
      <h4 style={{ marginTop: 10 }}>{data.bio}</h4>
      <div className="divider" />
      <div className="bio-tab-line">
        <h3>Phone:</h3>
        <h4>{data.phone}</h4>
      </div>
      <div className="divider" />
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        <div className="bio-tab-line">
          <h3>Address:</h3>
          <h4>{data.address_1}</h4>
        </div>
        <div className="bio-tab-line">
          <h3>City:</h3>
          <h4>{data.city}</h4>
        </div>
        <div className="bio-tab-line">
          <h3>State:</h3>
          <h4>{data.state}</h4>
        </div>
        <div className="bio-tab-line">
          <h3>Zipcode</h3>
          <h4>{data.zipcode}</h4>
        </div>
        <div className="bio-tab-line">
          <h3>State:</h3>
          <h4>{data.state}</h4>
        </div>
      </div>
    </div>
  );
};

export default InfoTab;
