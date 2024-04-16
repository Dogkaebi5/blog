"use client";
import { useState } from "react";
// import { doc, setDoc } from "firebase/firestore";
// import { firestore } from "@controller/firebase";
// import { setIdFromTc } from "@controller/handleId";
import { setDb } from "@controller/setDbTc";

export default function Admin() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setDb(formData);
  };

  // let modelSample = {
  //   2362720225: {
  //     sortId: "1",
  //     tc: "屋企",
  //     yueYin: "uk1 kei2",
  //     cn: "",
  //     pinyin: "wū qǐ",
  //     mandarin: "家",
  //     category: "명사",
  //     title: "집",
  //     mean: "집/가족",
  //     detail: "",
  //   },
  //   38646: {
  //     sortId: "0",
  //     tc: "零",
  //     yueYin: "ling4",
  //     cn: "",
  //     pinyin: "líng",
  //     mandarin: "",
  //     hanja: "떨어질 령(영) / 영 령(영)",
  //     category: "숫자",
  //     title: "숫자 0",
  //     mean: "숫자 0(영)/적은 수량/떨어지다",
  //     detail: "",
  //   },
  // };

  return (
    <div>
      <p>Admin</p>
      <form onSubmit={handleSubmit}>
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
        <span>추가 </span> <input className="border w-full" onChange={handleChange} name="detail" value={formData.detail} /> <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
