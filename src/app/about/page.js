import Image from "next/image";
import * as ccss from "@/app/controller/cssName";

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
          <p className="text-green-500 font-bold mb-1">OB입니다</p>
          <div className="p-1">
            <p>초 : 深圳华宝实验小学 ( 현: 龙腾小学 )</p>
            <p>중 : 深圳沙井中学 </p>
            <p>고 : 暨南大学 예과</p>
            <p>대 : 暨南大学 경제학</p>
          </div>
        </div>
        <div className={ccss.textBox}>
          <p className="text-green-500 font-bold mb-1">이런 일을 했습니다</p>
          <div className="p-1">
            <p>통역번역 : LG Display CA공장 건축현장 전기제어반</p>
            <p>지사관리 : 주커피 그룹 광저우지사</p>
            <p>공동창업 : 祥恩投资 엑셀러레이터</p>
            <p>전시운영 : 씽크브릿지 전시운영</p>
            <p>전시기획 : 우리공간연구소 전시 셋업</p>
            <p>서비스 기획 : GDAG NFT플랫폼 PM</p>
          </div>
        </div>
      </div>
    </>
  );
}
