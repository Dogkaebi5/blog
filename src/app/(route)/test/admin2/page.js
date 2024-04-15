"use client";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { firestore } from "@controller/firebase";

export default function Admin2() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const createdDate = new Date();
    setFormData({ ...formData, ["createdDate"]: createdDate });
    console.log("제출중");
    const docRef = await addDoc(collection(firestore, "post"), formData);
    console.log("제출 완료 :", docRef.id);
  };

  let modelSample = {
    title: "",
    slug: "",
    category: "",
    summary: "",
    content: "",
    thumbnail: "",
    createDate: "",
    updatedDate: "",
  };

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
