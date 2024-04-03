"use client";
import { useEffect, useState } from "react";
// import { doc, setDoc } from "firebase/firestore";
// import { firestore } from "@controller/firebase";
// import { setIdFromTc } from "@controller/handleId";
import { setDb } from "@controller/setDbTc";

export default function Admin() {
  const [formData, setFormData] = useState({
    sortId: "",
    tc: "",
    yueYin: "",
    cn: "",
    pinyin: "",
    mandarin: "",
    hanja: "",
    category: "",
    title: "",
    mean: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("page:", formData);
    const isDone = await setDb();
    console.log(isDone);
  };

  // 이벤트로 setdb를 호출하면 작동을 하지 않는다
  // client에서는 '제출중'까지 출력되는 것을 보아 try문이 실행이 되지 않는 것 같지만
  // server에서는 아예 console이 없어서 아예 실행이 되지 않은 것으로 판단.
  // setDb 내부에 '제출중'이 있으니 호출은 된 것 같지만.
  // setDb를 이벤트가 아닌 컴포넌트에 바로 사용하면 정상적으로 작동한다.
  // 즉 마운팅 단계에서는 server가 호출하는 것으로, 정상으로 작동한다.

  const data = {
    sortId: "19",
    tc: "望",
    yueYin: "mong6",
    cn: "",
    pinyin: "wàng",
    mandarin: "看",
    hanja: "바랄 망/보름 망",
    category: "동사",
    title: "쳐다보다",
    mean: "자세히 살펴보다. 물건의 표면을 보다. 쳐다보다./( 외부를 보는 행위. 책, 티비 같은 내용물을 볼 때는 사용하지 않는다. [ 望書 ]는 책을 읽는 것이 아니라 책 외부 자체를 보는 행위를 얘기한다. 컴퓨터를 보는데 사용이 된다. 이유는 컴퓨터는 보는 것이 아니라 사용하는 것으로 [ 望住電腦 ]는 '컴퓨터를 쳐다본다'의 뜻이다.)/바란다. 희망./만월, 음력15일",
  };

  return (
    <div>
      <p>Admin</p>
      <span>소팅 </span> <input className="border" onChange={handleChange} name="sortId" value={formData.sortId} /> <br />
      <span>번체 </span> <input className="border" onChange={handleChange} name="tc" value={formData.tc} /> <br />
      <span>월음 </span> <input className="border" onChange={handleChange} name="yueYin" value={formData.yueYin} /> <br />
      <span>간체 </span> <input className="border" onChange={handleChange} name="cn" value={formData.cn} /> <br />
      <span>보통 </span> <input className="border" onChange={handleChange} name="mandarin" value={formData.mandarin} /> <br />
      <span>병음 </span> <input className="border" onChange={handleChange} name="pinyin" value={formData.pinyin} /> <br />
      <span>한자 </span> <input className="border" onChange={handleChange} name="hanja" value={formData.hanja} /> <br />
      <span>구분 </span> <input className="border" onChange={handleChange} name="category" value={formData.category} /> <br />
      <span>제목 </span> <input className="border" onChange={handleChange} name="title" value={formData.title} /> <br />
      <span>의미 </span> <input className="border w-full" onChange={handleChange} name="mean" value={formData.mean} /> <br />
      <button onClick={() => setDb(data)}>등록</button>
    </div>
  );
}