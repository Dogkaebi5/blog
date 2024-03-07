"use client";
import * as ccss from "@/app/controller/cssName";

const YueYinPlayer = (props) => {
  function handleAudio(syllabel) {
    const audioUrlOrigin =
      "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/sound/";
    const audioUrl = `${audioUrlOrigin}/${syllabel}.Mp3`;
    const audio = new Audio(audioUrl);
    audio.play();
  }
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
