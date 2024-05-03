import * as ccss from "@controller/cssName";

export const metadata = {
  title: "DogKaeBi | Idea Pad",
  description: "기획 노트. 포로젝트 핵심 정리",
};

export default function Product() {
  return (
    <div className="bg-gray-50 h-full">
      <h3>Title</h3>
      <input className={ccss.input + " pl-2 w-full"} />
    </div>
  );
}
