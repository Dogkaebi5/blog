import Image from "next/image";
import * as ccss from "@controller/cssName";

export const metadata = {
  title: "DogKaeBi | About",
  description: "중국 20년 생활한 독깨비에 대해서",
};

export default function About() {
  return (
    <section className="max-w-md mx-auto my-8 pt-8 border-2 border-green-100 rounded-xl">
      <div className="text-center mb-4">
        <Image className="mx-auto rounded-full border shadow-lg" width={200} height={200} src={"https://drive.google.com/uc?id=1hm2QhpQzavfKF4tgpFarFgeovfRtOhNw"} alt="profile" />
        <h1 className="mt-4 text-3xl font-bold">DogKaeBi</h1>
        <h2 className="font-bold text-green-500">독깨비, 狗叔, 肥狗</h2>
        <p className="mt-2 text-sm">강아지를 좋아하는 중국 광둥 생활 20년 넘은 수상한 아재</p>
        <p className="mt-1 mb-12 text-xs text-green-500">독깨비 = Dog🐶 + 도깨비👻</p>
      </div>
      <div className={ccss.textBox + " text-sm mx-4"}>
        1996년 중국 썬전(深圳)으로 이주.
        <br /> 중국 초/중/고/대학 졸업. 중국 취업 및 친구들과 창업.
        <br />
        <br /> 2017년 전 직장상사의 권유로 한국 입국.
      </div>
      <div className="my-4 w-full h-2 bg-green-100" />
      <div className={ccss.textBox + " mx-4"}>
        <p className="text-green-500 font-bold mb-2">OB</p>
        <ul className="text-sm ml-4 mb-4">
          <li>초 : 深圳 华宝实验小学 ( 현: 龙腾小学 )</li>
          <li>중 : 深圳 沙井中学 </li>
          <li>고 : 广州 暨南大学 华文学院 예과</li>
          <li>대 : 广州 暨南大学 경제학</li>
        </ul>
      </div>
      <div className={ccss.textBox + " mx-4"}>
        <p className="text-green-500 font-bold mb-2">이런 일 해봄</p>
        <p className="text-sm font-bold ml-4">중국</p>
        <ul className="ml-8 mb-2 p-1 text-sm list-disc">
          <li>대기업 공장 건축현장 전기제어반 통번역</li>
          <li>F&B 프랜차이즈 현지화 실장 겸 지사 총괄팀장</li>
          <li>액셀러레이터 프로젝트 매니저 겸 공동창업자</li>
        </ul>
        <p className="text-sm font-bold ml-4">한국</p>
        <ul className="ml-8 p-1 text-sm list-disc">
          <li>콘텐츠 기획업체 해외 키즈카페 및 중국 전시 담당</li>
          <li>전시 설계업체 전시기획/구축/운영</li>
          <li>경영 컨설팅업체 사업/운영/웹 기획</li>
          <li>암호화폐 거래소 사업기획, NFT 마켓플레이스 PM</li>
        </ul>
      </div>
      <div className="my-4 w-full h-2 bg-green-100" />
    </section>
  );
}
