import * as Excel from "exceljs";
import dbTc from "@controller/readDbTc";

async function ExcelTest() {
  //엑셀 워크북 생성 및 시트 생성
  const workbook = new Excel.Workbook();
  const worksheet = workbook.addWorksheet("han");

  //대표행(타이틀행) 설정 및 입력
  worksheet.columns = [
    { header: "sortId", key: "sortId", width: 10 },
    { header: "tc", key: "tc", width: 10 },
    { header: "yueYin", key: "yueYin", width: 20 },
    { header: "cn", key: "cn", width: 10 },
    { header: "pinyin", key: "pinyin", width: 20 },
    { header: "mandarin", key: "mandarin", width: 15 },
    { header: "hanja", key: "hanja", width: 20 },
    { header: "category", key: "category", width: 20 },
    { header: "title", key: "title", width: 30 },
    { header: "mean", key: "mean", width: 40 },
    { header: "detail", key: "detail", width: 40 },
    { header: "relevance", key: "relevance", width: 30 },
  ];

  //데이터 추가 (행단위 추가)
  // worksheet.addRow({id: 1, name: 'Hong', birth: new Date().toLocaleDateString()});
  // worksheet.addRow({id: 2, name: 'Kim', birth: new Date().toLocaleDateString()});
  Object.values(dbTc).map((tc) => worksheet.addRow(tc));

  //엑셀 데이터 저장
  await workbook.xlsx.writeFile("export.xlsx");

  ////👆👆👆 여기까지가 엑셀 저장 👆👆👆

  ////👇👇👇 여기서부터 기존 엑셀파일에 추가 데이터 입력 👇👇👇

  //!엑셀 데이터 읽고 워크북 불러오기
  // const newWorkbook = new Excel.Workbook();
  // await newWorkbook.xlsx.readFile('export.xlsx');

  //!엑셀 시트 불러오기
  // const newworksheet = newWorkbook.getWorksheet('My Sheet');

  //!데이터 추가 (행단위 추가)
  // newworksheet.addRow(
  //   {id: 3, name: 'Lee', date: new Date().toLocaleDateString()}
  // );

  //!다른이름으로 저장 (기존 파일명과 같으면 덮어쓰기)
  // await newWorkbook.xlsx.writeFile('export2.xlsx');

  //종료
  console.log("끝!");
}

//함수실행
ExcelTest();
