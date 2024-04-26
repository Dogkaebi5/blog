"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@controller/firebase";

export default function Admin2() {
  const [formData, setFormData] = useState({});
  // SSR 이면 굳이 state를 사용해야 하는지에 대한 의문이 들었다.

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // 시작을 자동 추가하는 방식을 만들었는데, 계속해서 오류가 발생한다.
  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdDate = new Date();
    setFormData({ createdDate: createdDate, ...formData });
    console.log("제출중");
    const docRef = await addDoc(collection(firestore, "post"), formData);
    console.log("제출 완료 :", docRef.id);
  };

  // let modelSample = {
  //   title: "",
  //   slug: "",
  //   category: "",
  //   summary: "",
  //   content: "",
  //   thumbnail: "",
  //   createDate: "",
  //   updatedDate: "",
  // };

  return (
    <div>
      <p>Admin</p>
      <form onSubmit={handleSubmit}>
        <span>제목 </span> <input className="border" onChange={handleChange} name="title" value={formData.title} /> <br />
        <span>링크 </span> <input className="border" onChange={handleChange} name="slug" value={formData.slug} /> <br />
        <span>구분 </span> <input className="border" onChange={handleChange} name="category" value={formData.category} /> <br />
        <span>개요 </span> <input className="border" onChange={handleChange} name="summary" value={formData.summary} /> <br />
        <span>내용 </span> <input className="border" onChange={handleChange} name="content" value={formData.content} /> <br />
        <span>그림 </span> <input className="border" onChange={handleChange} name="thumbnail" value={formData.thumbnail} /> <br />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}
