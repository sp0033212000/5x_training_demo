import React, { useState, useEffect } from "react";

import Banner from "../banner/Banner";
import FeatureSection from "./FeatureSection";
import RecentLecture from "../recentLecture/RecentLecture";
import Avatar from "../avatar/Avatar";
import Showcase from "../showcase/Showcase";
import KnowAboutUs from "./KnowAboutUs";

const Main = () => {
  const [caroData, setCaroData] = useState([]);
  const [lectureData, setLectureData] = useState([]);
  const [avatarData, setAvatarData] = useState([]);

  useEffect(() => {
    import("../../staticData/carouselData.json").then(res =>
      setCaroData(res.default)
    );
    import("../../staticData/lectureData.json").then(res =>
      setLectureData(res.default)
    );
    import("../../staticData/avatarData.json").then(res =>
      setAvatarData(res.default)
    );
  }, []);

  return (
    <>
      <div className="overwrite-index">
        <Banner data={caroData} />
        <FeatureSection />
        <RecentLecture data={lectureData} />
        <Avatar data={avatarData} />
        <Showcase />
        <KnowAboutUs />
      </div>
    </>
  );
};

export default Main;
