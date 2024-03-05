"use client";
import * as ccss from "@/app/controller/cssName";
import { handleAudio } from "@/app/controller/handleAudio";

const YueYinPlayer = (props) => {
  const yueYinArr = props.yueYinArr;
  return (
    <>
      {yueYinArr.map((yueYin) => (
        <p
          className={ccss.yueYinPlayer}
          key={yueYin}
          onClick={() => handleAudio(yueYin)}
        >
          {yueYin}
        </p>
      ))}
    </>
  );
};

export default YueYinPlayer;
