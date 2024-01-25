function handleAudio(syllabel) {
  const audioUrlOrigin =
    "https://humanum.arts.cuhk.edu.hk/Lexis/lexi-mf/sound/";
  const audioUrl = `${audioUrlOrigin}/${syllabel}.Mp3`;
  const audio = new Audio(audioUrl);
  audio.play();
}

export { handleAudio };
