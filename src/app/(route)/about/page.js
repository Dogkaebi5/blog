import Image from "next/image";
import * as ccss from "@controller/cssName";

export default function About() {
  return (
    <>
      <div className="text-center mb-4">
        <Image
          className="mx-auto rounded-full border shadow-lg"
          width={200}
          height={200}
          src={"https://drive.google.com/uc?id=1hm2QhpQzavfKF4tgpFarFgeovfRtOhNw"}
          alt="profile"
        />
        <h1 className="mt-4 text-3xl font-bold">DogKaeBi</h1>
        <p>독깨비, 狗叔, 肥狗</p>
      </div>
      <div className="max-w-md mx-auto">
        <p>강아지를 좋아하는 중국 광둥 생활 20년인 수상한 아재</p>
        <br />
        <div className={ccss.textBox}>
          <p className="text-green-500 font-bold mb-1">OB = Old Boy</p>
          <div className="p-1 text-sm">
            <p>초 : 深圳 华宝实验小学 ( 현: 龙腾小学 )</p>
            <p>중 : 深圳 沙井中学 </p>
            <p>고 : 广州 暨南大学 예과</p>
            <p>대 : 广州 暨南大学 경제학</p>
          </div>
        </div>
        <div className={ccss.textBox}>
          <p className="text-green-500 font-bold mb-1">이런 일 해봄</p>
          <div className="p-1 text-sm flex gap-6">
            <div className="font-bold">
              <p>LG Display CA</p>
              <p>ZOO COFFEE</p>
              <p>祥恩投资</p>
              <p>씽크브릿지</p>
              <p>우리공간연구소</p>
              <p>글로벌디지털에셋</p>
              <p>빅핸드인베스트먼트</p>
            </div>
            <div>
              <p>공장 건축현장 전기제어반 통번역</p>
              <p>광저우지사 총괄팀장, 현지화 연구실장</p>
              <p>공동창업자 엑셀러레이터</p>
              <p>체험 콘텐츠 기획 및 운영</p>
              <p>전시 기획, 셋업, 운영</p>
              <p>사업 기획, 서비스 기획, PM</p>
              <p>서비스 기획, 프로토타입 앱 개발</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
