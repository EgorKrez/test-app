import { useState } from "react";
import { DataProps } from "../FriendsDetails";
import InfoTab from "../InfoTab";
import PhotosTab from "../PhotosTab";

enum TabsEnum {
  Info = "Info",
  Photos = "Photos",
}

type Props = {
  data: DataProps;
};

const FriendsDetailsTabs = (props: Props) => {
  const { data } = props;
  const [activeTab, setActiveTab] = useState<TabsEnum>(TabsEnum.Info);

  const switchTab = (tab: TabsEnum) => {
    if (activeTab === tab) {
      return;
    }
    setActiveTab(tab);
  };

  return (
    <div>
      <div className="friends-details-tabs">
        <div
          className={
            activeTab === TabsEnum.Info
              ? "friends-details-tab friends-details-tab-active"
              : "friends-details-tab"
          }
          onClick={() => {
            switchTab(TabsEnum.Info);
          }}
        >
          Info
          {activeTab === TabsEnum.Info && (
            <div className="friends-details-tab-active-bottom"></div>
          )}
        </div>
        <div
          className={
            activeTab === TabsEnum.Photos
              ? "friends-details-tab friends-details-tab-active"
              : "friends-details-tab"
          }
          onClick={() => {
            switchTab(TabsEnum.Photos);
          }}
        >
          Photos
          {activeTab === TabsEnum.Photos && (
            <div className="friends-details-tab-active-bottom"></div>
          )}
        </div>
      </div>
      {activeTab === TabsEnum.Info ? (
        <InfoTab data={data} />
      ) : (
        <PhotosTab images={data.photos} />
      )}
    </div>
  );
};

export default FriendsDetailsTabs;
