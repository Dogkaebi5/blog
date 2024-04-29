import * as ccss from "@controller/cssName";
export default function CssTester() {
  return (
    <>
      <div className={ccss.logo}>logo</div>
      <div className={ccss.noHeroContent}>noHeroContent</div>
      <div className={ccss.hero}>hero</div>
      <div className={ccss.subNavWrap}>subNavWrap</div>
      <div className={ccss.toggle}>toggle</div>
      <div className={ccss.toggleActive}>toggleActive</div>
      <div className={ccss.searchWrap}>searchWrap</div>
      <div className={ccss.headerBtnBlock}>headerBtnBlock</div>
      <div className={ccss.headerBtn}>headerBtn</div>
      <div className={ccss.mainBlock}>mainBlock</div>
      <div className={ccss.subBlock}>subBlock</div>
      <div className={ccss.h1}>h1</div>
      <div className={ccss.h2}>h2</div>
      <div className={ccss.h3}>h3</div>
      <div className={ccss.hr}>hr</div>
    </>
  );
}
