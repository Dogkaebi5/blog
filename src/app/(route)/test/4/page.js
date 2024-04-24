// import Link from "next/link";
// import { syllable } from "@controller/yueYin";
// import { syllableURL, initialURL } from "@controller/urls";
// import * as ccss from "@controller/cssName";

// export default function Syllable() {
//   const vowels = Object.keys(syllable.vowel);
//   const vowelHeads = [
//     ["aa", "a", "e", "i", "o", "u", "oe", "eo", "yu"],
//     ["[ aː ]", "[ ɐ ]", "[ ɛː ] [ e ]", "[ iː ] [ ɪ ]", "[ ɔː ] [ o ]", "[ uː ] [ ʊ ]", "[ œː ]", "[ ɵ ]", "[ yː ]"],
//     ["ㅏ~", "ㅏ", "ㅔ", "ㅣ/ㅐ", "ㅗㅓ", "ㅜ~", "ㅓ", "ㅗ", "ㅟ"],
//   ];
//   const vowelFinals = [
//     ["-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
//     ["[ -i ] [ -y ]", "[ -u ]", "[ -m ]", "[ -n ]", "[ -ŋ ]", "[ -p̚ ]", "[ -t̚ ]", "[ -k̚ ]"],
//   ];
//   const vowelTable = [
//     ["-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
//     ["aa 呀", "aai 挨", "aau 拗", "aam 監", "aan 晏", "aang 罌", "aap 鴨", "aat 押", "aak 客"],
//     ["", "ai 矮", "au 歐", "am 痷", "an 恩", "ang 鶯", "ap 急", "at 不", "ak 德"],
//     ["e 誒", "ei 非", "eu 掉", "em 舐", "", "eng 鏡", "ep 夾", "", "ek 尺"],
//     ["i 衣", "", "iu 妖", "im 淹", "in 煙", "ing 英", "ip 葉", "it 熱", "ik 益"],
//     ["o 柯", "oi 哀", "ou 奧", "", "on 安", "ong 康", "", "ot 渴", "ok 惡"],
//     ["u 烏", "ui 煨", "", "", "un 碗", "ung 甕", "", "ut 活", "uk 屋"],
//     ["oe 靴", "", "", "", "", "oeng 香", "", "", "oek 約"],
//     ["", "eoi 去", "", "", "eon 春", "", "", "eot 律", ""],
//     ["yu 於", "", "", "", "yun 冤", "", "", "yut 月", ""],
//     ["", "", "", "m 唔", "", "ng 五", "", "", ""],
//   ];

//   const tableTest = [
//     ["운모", "단 원음", "복 원음2", "코 미음3", "입성3"],
//     ["음위", "-", "-i", "-u", "-m", "-n", "-ng", "-p", "-t", "-k"],
//     ["aa", "0aa 呀", "0aai 挨", "0aau 拗", "0aam 監", "0aan 晏", "0aang 罌", "0aap 鴨", "0aat 押", "0aak 客"],
//     ["a", "", "0ai 矮", "0au 歐", "0am 痷", "0an 恩", "0ang 鶯", "0ap 急", "0at 不", "0ak 德"],
//     ["e", "0e 誒", "0ei 非", "0eu 掉", "0em 舐", "", "0eng 鏡", "0ep 夾", "", "0ek 尺"],
//     ["i", "0i 衣", "", "0iu 妖", "0im 淹", "0in 煙", "0ing 英", "0ip 葉", "0it 熱", "0ik 益"],
//     ["o", "0o 柯", "0oi 哀", "0ou 奧", "", "0on 安", "0ong 康", "", "0ot 渴", "0ok 惡"],
//     ["u", "0u 烏", "0ui 煨", "", "", "0un 碗", "0ung 甕", "", "0ut 活", "0uk 屋"],
//     ["oe", "0oe 靴", "", "", "", "", "0oeng 香", "", "", "0oek 約"],
//     ["eo", "", "0eoi 去", "", "", "0eon 春", "", "", "0eot 律", ""],
//     ["yu", "0yu 於", "", "", "", "0yun 冤", "", "", "0yut 月", ""],
//     ["독립 음절", "", "", "", "0m 唔", "", "0ng 五", "", "", ""],
//   ];

//   return (
//     <div className={ccss.noHeroContent}>
//       <div className={ccss.headerBtnBlock}>
//         <button className={ccss.headerBtn} type="button">
//           <Link href={syllableURL}>&lt;&lt; 음절</Link>
//         </button>
//         <button className={ccss.headerBtn} type="button">
//           <Link href={initialURL}>성모 &gt;&gt; </Link>
//         </button>
//       </div>
//       <div className={ccss.mainBlock}>
//         <h1 className={ccss.h1}>운모(韻母)</h1>
//         <p className={ccss.textBox}>
//           운모는 한국어의 모음과 비슷한 개념이다.
//           <br />
//           운모는 또 운복(韻腹)과 운미(韻尾)로 구성되어 있다.
//           <br />
//           운복은 9개, 운미는 8개가 있고 총57개 조합이 있다.
//         </p>
//         <hr className={ccss.hr} />
//         <div className={ccss.subBlock}>
//           <h2 className={ccss.h2}>운복(韻腹) & 운미(韻尾)</h2>
//           <table className="mt-4 text-sm table-fixed ">
//             <tbody>
//               <tr className={ccss.tBlue + " font-bold"}>
//                 <td className="px-4">운복</td>
//                 {vowelHeads[0].map((head) => (
//                   <td key={head} className="px-4">
//                     {head}
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td rowspan="2">발음</td>
//                 {vowelHeads[1].map((head) => (
//                   <td key={head}>{head}</td>
//                 ))}
//               </tr>
//               <tr>
//                 {vowelHeads[2].map((head) => (
//                   <td key={head}>{head}</td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//           <table className="mt-4 text-sm">
//             <tbody>
//               <tr className={ccss.tBlue + " font-bold"}>
//                 <td className="px-4 w-16">운미</td>
//                 {vowelFinals[0].map((head) => (
//                   <td key={head} className="px-4 w-16">
//                     {head}
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td>발음</td>
//                 {vowelFinals[1].map((head) => (
//                   <td key={head}>{head}</td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//         <hr className={ccss.hr} />
//         <div className={ccss.subBlock}>
//           <h2 className={ccss.h2}>운모 종류</h2>
//           <div className={ccss.alpCardWrap}>
//             {vowels.map((vowel) => (
//               <Link href={initialURL + vowel} key={vowel} className={ccss.alpCardOutBox}>
//                 <h2 className={ccss.alpCardInBox}>{vowel}</h2>
//               </Link>
//             ))}
//           </div>
//         </div>
//         <hr className={ccss.hr} />
//         <div className={ccss.subBlock}>
//           <h2 className={ccss.h2}>운모 조합표</h2>
//           <div>
//             <table>
//               <tbody className="vowel-table">
//                 {tableTest.map((row) => {
//                   return (
//                     <tr key={"r" + row[0]}>
//                       {row.map((text) => {
//                         return text.endsWith("2") ? (
//                           <td key={text} colspan="2">
//                             {text.split("2")[0]}
//                           </td>
//                         ) : text.endsWith("3") ? (
//                           <td key={text} colspan="3">
//                             {text.split("3")[0]}
//                           </td>
//                         ) : text.startsWith("0") ? (
//                           <td key={text}>
//                             <Link className={ccss.tableLink} href={initialURL + text.split(0)[1].split(" ")[0]}>
//                               {text.split("0")[1]}
//                             </Link>
//                           </td>
//                         ) : (
//                           <td key={text}>{text}</td>
//                         );
//                       })}
//                     </tr>
//                   );
//                 })}
//               </tbody>
//             </table>
//           </div>
//           <table className={ccss.table}>
//             <thead>
//               <tr className={ccss.tBlue}>
//                 <td className="font-bold py-1">운모</td>
//                 <td className="font-bold py-1">단 원음</td>
//                 <td className="font-bold py-1" colspan="2">
//                   복 원음
//                 </td>
//                 <td className="font-bold py-1" colspan="3">
//                   코 미음
//                 </td>
//                 <td className="font-bold py-1" colspan="3">
//                   입성
//                 </td>
//               </tr>
//             </thead>
//             <tbody>
//               <tr className={ccss.tBlue}>
//                 <td className={ccss.tYellow}>음위</td>
//                 {vowelTable[0].map((v) => (
//                   <td key={"key" + v}>{v}</td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>aa</td>
//                 {vowelTable[1].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>a</td>
//                 {vowelTable[2].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>e</td>
//                 {vowelTable[3].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>i</td>
//                 {vowelTable[4].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>o</td>
//                 {vowelTable[5].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>u</td>
//                 {vowelTable[6].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>oe</td>
//                 {vowelTable[7].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>eo</td>
//                 {vowelTable[8].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>yu</td>
//                 {vowelTable[9].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//               <tr>
//                 <td className={ccss.tYellow}>독립 음절</td>
//                 {vowelTable[10].map((v) => (
//                   <td key={"key" + v} className={ccss.tableLink}>
//                     <Link className={ccss.tableLink} href={initialURL + v.split(" ")[0]}>
//                       {v}
//                     </Link>
//                   </td>
//                 ))}
//               </tr>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }
