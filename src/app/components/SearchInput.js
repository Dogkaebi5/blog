"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as ccss from "@controller/cssName";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      console.log(search);
      router.push("/search?q=" + search);
    }
  };

  return (
    <input
      type="search"
      placeholder="search.."
      //logo 삽입 때문에 class가 길다
      className={`${ccss.searchWrap}`}
      style={{ backgroundSize: "16px" }}
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      onKeyDown={handleKeyDown}
    />
  );
};

export default SearchInput;
