import "../../App.css";
import { useEffect, useState } from "react";
import FriendsListItem from "../FriendsListItem";

export type FriendProps = {
  available: boolean;
  first_name: string;
  id: number;
  img: string;
  last_name: string;
  status: string;
};

const FriendsList = () => {
  const [data, setData] = useState<FriendProps[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("http://private-5bdb3-friendmock.apiary-mock.com/friends")
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          setData(data);
        });
    };

    fetchData();
  }, []);

  return (
    <div className="friends-list">
      <h1>Friends</h1>
      {data?.map((item, index) => (
        <FriendsListItem data={item} key={index} />
      ))}
    </div>
  );
};

export default FriendsList;
