import React, { useEffect, useState } from "react";
import JsonApi from "../../api/JsonApi";
import DataNodeHelp from "../../helper/DataNodeHelp";
import Pagination from "../basicComponent/pagination/Pagination";
import PostPage from "./PostPage";

const DataNode = new DataNodeHelp();

function chunkArray(myArray, chunkSize) {
  let index = 0;
  const arrayLength = myArray.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const myChunk = myArray.slice(index, index + chunkSize);
    // Do something if you want with the group
    tempArray.push(myChunk);
  }

  return tempArray;
}

const Posts = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const res = await JsonApi.get("/posts");
      chunkArray(res, 4).forEach(item => {
        DataNode.append(item);
      });
      setData(DataNode);
    })();
  }, []);

  if (data === null) return null;

  return <Pagination data={data} PageComponent={PostPage} text="最新消息" />;
};

export default Posts;
