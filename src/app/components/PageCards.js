"use client"

import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import PageCard from "./PageCard"

const PageCards = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async() => {
      try {
        const res = await fetch('/json/data.json')
        const jsonData = await res.json();
        setData(jsonData);
      }catch (err) {
        console.error('Err fetch :',err)
      }
    }
    fetchData()
  },[]);

  return ( 
    <div className="mt-4 grid grid-cols grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {data.data.map((post) => 
        <PageCard key={post.id} data={post}/>
      )}
    </div>
  )
}
export default PageCards