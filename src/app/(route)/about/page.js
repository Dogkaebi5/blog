import Image from "next/image";
import * as ccss from "@controller/cssName";

export default function About() {
  return (
    <div className="max-w-md mx-auto">
      <div className="text-center mb-4">
        <Image className="mx-auto rounded-full border shadow-lg" width={200} height={200} src={"https://drive.google.com/uc?id=1hm2QhpQzavfKF4tgpFarFgeovfRtOhNw"} alt="profile" />
        <h1 className="mt-4 text-3xl font-bold">DogKaeBi</h1>
        <h2 className="text-lg mt-2">독깨비, 狗叔, 肥狗</h2>
        <p className="text-sm">강아지를 좋아하는 중국 광둥 생활 20년 넘은 수상한 아재</p>
      </div>
      <div className={ccss.textBox + " text-sm"}>
        1996년 중국 썬전(深圳)으로 이주.
        <br /> 로컬 초/중학교 졸업. 港澳台 학생을 위한 예과로 고등학교 대체.
        <br /> 대학교 졸업 후 현지 취업 및 창업.
        <br /> 2017년 전 직장상사의 권유로 한국 입국.
      </div>
      <div className={ccss.textBox}>
        <p className="text-green-500 font-bold mb-1">OB</p>
        <ul className="p-1 text-sm">
          <li>초 : 深圳 华宝实验小学 ( 현: 龙腾小学 )</li>
          <li>중 : 深圳 沙井中学 </li>
          <li>고 : 广州 暨南大学 华文学院 예과</li>
          <li>대 : 广州 暨南大学 경제학</li>
        </ul>
      </div>

      <div className={ccss.textBox}>
        <p className="text-green-500 font-bold mb-1">이런 일 해봄</p>
        <p className="text-sm font-bold">중국</p>
        <ul className="ml-4 p-1 text-sm list-disc">
          <li>대기업 공장 건축현장 전기제어반 통번역</li>
          <li>F&B 프랜차이즈 현지화 실장 겸 지사 총괄팀장</li>
          <li>액셀러레이터 프로젝트 매니저 겸 공동창업자</li>
        </ul>
        <p className="text-sm font-bold">한국</p>
        <ul className="ml-4 p-1 text-sm list-disc">
          <li>콘텐츠기획 기업 해외 키즈카페 및 중국 전시 담당</li>
          <li>전시설계 기업 테마 전시기획</li>
          <li>경영컨설팅 기업 사업/운영/웹 기획</li>
          <li>암호화폐 거래소 사업기획, NFT 마켓플레이스 PM</li>
        </ul>
      </div>
    </div>
  );
}
