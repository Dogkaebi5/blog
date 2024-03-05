import * as ccss from "@/app/controller/cssName";
import syllable from "../syllable/yueYin";
import { setTcFromId, splitIds } from "@/app/controller/handleId";
import { firestore } from "@/app/controller/firebase";
import { doc, getDoc } from "firebase/firestore/lite";
import YueYinPlayer from "@/app/components/YueYinPlayer";

export default async function HanJa(props) {
  const params = props.params.id;
  const idsArr = splitIds(params);
  const character = setTcFromId(idsArr);

  let data = {
    tc: "-",
    yueYin: "-",
    cn: "-",
    mandarin: "-",
    hanja: "-",
    category: "-",
    mean: "-",
  };
  let yueYinArr = [];

  ////// firestore에서 데이터 가져오기....
  ////// krSyllable-syllable.yueYin[syllableWithoutTones[0]].pronunciation; 에러
  ////// data도 firestore 데이터로 set 안되는 듯
  const getData = async () => {
    const docRef = doc(firestore, "tc", params);
    const snapshot = await getDoc(docRef);
    return snapshot.data();
  };
  data = await getData();
  yueYinArr = data.yueYin.split(" ");

  const phrases = ["一往無前", "一事無成", "一五一十", "一心一意", "一言為定"];

  const krSyllable = () => {
    if (data != null) {
      const syllableWithoutTones = data.yueYin.replace(/\d+/g, "").split(" ");
      if (syllableWithoutTones.length == 1) {
        return syllable.yueYin[syllableWithoutTones[0]].pronunciation;
      } else {
        return syllableWithoutTones
          .map((syl) => syllable.yueYin[syl].pronunciation)
          .join(" ");
      }
    }
    return "-";
  };

  return (
    <div className={ccss.noHeroContent}>
      <div className="flex">
        <div className={ccss.cnTitleBox}>
          <h1 className={character.length == 1 ? " text-8xl" : " text-7xl"}>
            {character}
          </h1>
        </div>
        <div className="ml-4">
          <p className={ccss.smLabel}>월음 (粵音)</p>
          <YueYinPlayer yueYinArr={yueYinArr} />
          <p className={ccss.smLabel}>발음</p>
          <p className={ccss.contentBox}>{krSyllable()}</p>
        </div>
      </div>
      {character.length == 1 ? (
        <div className="p-6 flex">
          <div>
            <p className={ccss.smLabel}>한국 음·한자</p>
            <p className={ccss.smLabel}>간체자 (简体字)</p>
            <p className={ccss.smLabel}>보통화 (拼音)</p>
            <p className={ccss.smLabel}>UTF</p>
          </div>
          <div>
            <p className={ccss.contentBox}>{data.hanja}</p>
            <p className={ccss.contentBox}>
              {data.cn == "" ? data.tc : data.cn}
            </p>
            <p className={ccss.contentBox}>{data.mandarin}</p>
            {character.length == 1 && (
              <p className={ccss.contentBox}>{idsArr[0]}</p>
            )}
          </div>
        </div>
      ) : (
        <div className="p-6 flex">
          <div>
            <p className={ccss.smLabel}>拼音</p>
            <p className={ccss.smLabel}>普通话</p>
          </div>
          <div>
            <p className={ccss.contentBox}>{data.mandarin}</p>
            <p className={ccss.contentBox}>
              {data.cn == "" ? data.tc : data.cn}
            </p>
          </div>
        </div>
      )}

      <div className="w-full bg-green-50 text-sm p-4 rounded">
        구분 : {data.category}
      </div>
      <hr className="border-gray-400" />
      <div className="p-4">
        {data.mean.split("/").map((text) => {
          return (
            <p className="py-1" key={text}>
              · {text}
            </p>
          );
        })}
      </div>
      <hr className="border-gray-400" />
      {character.length == 1 ? (
        <div className="p-4">
          <p className="font-semibold mb-4">단어</p>
          <p>
            {phrases.map((phrase) => {
              return (
                <span key={phrase}>
                  <span className="text-blue-600">{phrase}</span>
                  <span> , </span>
                </span>
              );
            })}
          </p>
          <hr />
        </div>
      ) : null}
    </div>
  );
}
