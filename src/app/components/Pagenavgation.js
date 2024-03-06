import * as ccss from "@/app/controller/cssName";
import Link from "next/link";

const PageNavgation = (props) => {
  // 부모에서 받는 최대 페이지, 현재 링크, 현재 페이지
  const maxPages = props.maxPages;
  const path = props.path;
  const tag = props.tag;
  let page = props.page;

  ////////
  // nav 중산 숫자 세팅.
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
      if (page == maxPages - 2)
        return [-1, maxPages - 3, maxPages - 2, maxPages - 1];
      return [-1, page - 1, page, page + 1, -1];
    }
  };

  //url 설정
  const setNewParams = (num) => {
    // 현재 페이지가 1 ~ max를 초과하면 반응 안함
    if (num < 1 || num > maxPages) return;
    // 쿼리가 없으면 page만 전달
    if (tag == "" || tag == null) {
      return { page: num };
    } else {
      return { tag: tag, page: num };
    }
  };

  return (
    <div className={ccss.pageNavWrap}>
      {
        // 고정 prev btn. 현재 1페이지면 표시 안함
        page == 1 ? null : (
          <Link
            href={{ pathname: path, query: setNewParams(page - 1) }}
            className={ccss.pageNum + " mr-2"}
            scroll={false}
          >
            ◀
          </Link>
        )
      }
      {
        // 고정 1st btn
        page == 1 ? (
          <span className={ccss.pageNumAct}>1</span>
        ) : (
          <Link
            href={{ pathname: path, query: setNewParams(1) }}
            className={ccss.pageNum}
            scroll={false}
          >
            1
          </Link>
        )
      }

      {
        //중간 페이지
        setPageNums().map((pageNum) => {
          return pageNum != -1 ? (
            page == pageNum ? (
              <span key={`btn${pageNum}`} className={ccss.pageNumAct}>
                {pageNum}
              </span>
            ) : (
              <Link
                href={{ pathname: path, query: setNewParams(pageNum) }}
                key={`btn${pageNum}`}
                className={ccss.pageNum}
                scroll={false}
              >
                {pageNum}
              </Link>
            )
          ) : (
            <span className="p-1">...</span>
          );
        })
      }
      {
        // 고정 last btn. 전체가 한 페이지면 표시 안함
        maxPages == 1 ? null : page == maxPages ? (
          <span className={ccss.pageNumAct}>{maxPages}</span>
        ) : (
          <Link
            href={{ pathname: path, query: setNewParams(maxPages) }}
            className={ccss.pageNum}
            scroll={false}
          >
            {maxPages}
          </Link>
        )
      }

      {
        // 고정 next btn. 현재 last 페이지면 표시 안함
        page == maxPages ? null : (
          <Link
            href={{ pathname: path, query: setNewParams(page + 1) }}
            className={ccss.pageNum + " ml-2"}
            scroll={false}
          >
            ▶
          </Link>
        )
      }
    </div>
  );
};

export default PageNavgation;
