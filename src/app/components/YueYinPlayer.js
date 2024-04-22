"use client";
import * as ccss from "@controller/cssName";

const YueYinPlayer = ({ yueYinArr }) => {
  function handleAudio(syllabel) {
    const audioUrlOrigin = `https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/sound/`;
    const audioUrl = `${audioUrlOrigin}/${syllabel}.Mp3`;
    const audio = new Audio(audioUrl);
    audio.play();
  }
  return (
    <>
      {yueYinArr.map((yueYin) => (
        <p className={ccss.yueYinPlayer} key={yueYin} onClick={() => handleAudio(yueYin)}>
          {yueYin}
        </p>
      ))}
    </>
  );
};

export default YueYinPlayer;
