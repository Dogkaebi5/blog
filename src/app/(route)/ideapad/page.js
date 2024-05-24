import * as ccss from "@controller/cssName";

export const metadata = {
  title: "DogKaeBi | Idea Pad",
  description: "기획 노트. 포로젝트 핵심 정리",
};

export default function Product() {
  return (
    <div className="h-full p-4 bg-gray-50 text-sm">
      <h2 className="font-black mb-2 ">기본 기획</h2>
      <h3>서비스/상품 이름</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>문제점</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>이유</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>해결</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>분류</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>규모</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>관계</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>법</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>지원금</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>정의 누구</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>정의 언제</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>정의 무엇</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>정의 어떻게</h3>
      <input className={ccss.input + " pl-2 w-full"} />
      <h3>제공</h3>
      <input className={ccss.input + " pl-2 w-full"} />
    </div>
  );
}
