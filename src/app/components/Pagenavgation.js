import Link from "next/link";
import * as ccss from "@controller/cssName";

const PageNavgation = (props) => {
  // 부모에서 받지 않고 직접 path 확인 == 낭비?
  // 최대 페이지, 현재 페이지, 현재 태그, 현재 페이지
  ////// 부모에서 최대 및 페이지만 받음, Link에 path 필요없음
  ////// 페이지 ctrl 오류가 계속 발생 -> 쿼리가 string으로 인한 오류. 수정완료
  const maxPages = Number(props.maxPages);
  const page = Number(props.page);

  ////////
  // nav 중간 숫자 세팅.
  // prev, next, first, last 자동 출력
  // -1 은 '...'으로 출력
  const setPageNums = () => {
    // 7 페이지 이하의 경우, 전부 표시
    if (maxPages < 7) {
      let result = [];
      for (let i = 2; i <= maxPages - 1; i++) {
        result.push(i);
      }
      return result;
      // 현재 번호 & 앞뒤 번호 출력, 기타 -1(...)
    } else {
      if (page == 1) return [2, -1];
      if (page == 2) return [2, 3, -1];
      if (page == 3) return [2, 3, 4, -1];
      if (page == maxPages) return [-1, maxPages - 1];
      if (page == maxPages - 1) return [-1, maxPages - 2, maxPages - 1];
      if (page == maxPages - 2) return [-1, maxPages - 3, maxPages - 2, maxPages - 1];
      return [-1, page - 1, page, page + 1, -1];
    }
  };
  const pageNums = setPageNums();

  //url 설정
  const setNewParams = (num) => {
    // 선택한 페이지가 1 ~ max를 초과하면 반응 안함
    if (num < 1 || num > maxPages) return;
    // 쿼리가 없으면 page만 전달
    if (props.tag == "" || props.tag == null) {
      return { page: num };
    } else {
      return { tag: props.tag, page: num };
    }
  };

  return (
    <div className={ccss.pageNavWrap}>
      {
        // 고정 prev btn. 현재 1페이지면 표시 안함
        page == 1 ? null : (
          <Link href={{ query: setNewParams(page - 1) }} className={ccss.pageNum + " mr-2"} scroll={false}>
            ◀
          </Link>
        )
      }
      {
        // 고정 1st btn
        page == 1 ? (
          <span className={ccss.pageNumAct}>1</span>
        ) : (
          <Link href={{ query: setNewParams(1) }} className={ccss.pageNum} scroll={false}>
            1
          </Link>
        )
      }

      {
        //중간 페이지
        pageNums.map((pageNum) => {
          return pageNum != -1 ? (
            page == pageNum ? (
              <span key={`btn${pageNum}`} className={ccss.pageNumAct}>
                {pageNum}
              </span>
            ) : (
              <Link
                href={{ query: setNewParams(pageNum) }}
                key={`btn${pageNum}`}
                className={ccss.pageNum}
                scroll={false}
              >
                {pageNum}
              </Link>
            )
          ) : (
            <span key={`btn${pageNum}`} className="p-1">
              ...
            </span>
          );
        })
      }
      {
        // 고정 last btn. 전체가 한 페이지면 표시 안함
        maxPages < 2 ? null : page == maxPages ? (
          <span className={ccss.pageNumAct}>{maxPages}</span>
        ) : (
          <Link href={{ query: setNewParams(maxPages) }} className={ccss.pageNum} scroll={false}>
            {maxPages}
          </Link>
        )
      }

      {
        // 고정 next btn. 현재 last 페이지면 표시 안함
        page == maxPages ? null : (
          <Link href={{ query: setNewParams(page + 1) }} className={ccss.pageNum + " ml-2"} scroll={false}>
            ▶
          </Link>
        )
      }
    </div>
  );
};

export default PageNavgation;
