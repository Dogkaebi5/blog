"use client";
import { useState } from "react";
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
    await setDb();
  };

  return (
    <div>
      <p>Admin</p>
      <form onSubmit={handleSubmit}>
        <span>소팅 </span>
        <input className="border" onChange={handleChange} name="sortId" value={formData.sortId} /> <br />
        <span>번체 </span>
        <input className="border" onChange={handleChange} name="tc" value={formData.tc} /> <br />
        <span>월음 </span>
        <input className="border" onChange={handleChange} name="yueYin" value={formData.yueYin} /> <br />
        <span>간체 </span>
        <input className="border" onChange={handleChange} name="cn" value={formData.cn} /> <br />
        <span>병음 </span>
        <input className="border" onChange={handleChange} name="mandarin" value={formData.mandarin} /> <br />
        <span>한자 </span>
        <input className="border" onChange={handleChange} name="hanja" value={formData.hanja} /> <br />
        <span>카테 </span>
        <input className="border" onChange={handleChange} name="category" value={formData.category} /> <br />
        <span>제목 </span>
        <input className="border" onChange={handleChange} name="title" value={formData.title} /> <br />
        <span>의미 </span>
        <input className="border" onChange={handleChange} name="mean" value={formData.mean} /> <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
