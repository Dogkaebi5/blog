import * as ccss from "@/app/controller/cssName";
import Link from "next/link";

export default function PageNavgation(props) {
  const maxPages = props.maxPages;
  const path = props.path;
  const tag = props.tag;
  let page = props.page;

  const setPageNums = () => {
    if (maxPages < 7) {
      let result = [];
      for (let i = 2; i <= maxPages - 1; i++) {
        result.push(i);
      }
      return result;
    } else {
      if (page == 1) return [2, -1];
      if (page == 2) return [2, 3, -1];
      if (page == 3) return [2, 3, 4, -1];
      if (page == maxPages) return [-1, maxPages - 1];
      if (page == maxPages - 1) return [-1, maxPages - 2, maxPages - 1];
      if (page == maxPages - 2) return [-1, maxPages - 2, maxPages - 1];
      return [-1, page - 1, page, page + 1, -1];
    }
  };

  const setNewParams = (num) => {
    if (tag == "" || tag == null) {
      if (num < 1 || num > maxPages) return;
      return { page: num };
    } else {
      if (num < 1 || num > maxPages) return;
      return { tag: tag, page: num };
    }
  };

  return (
    <div className={ccss.pageNavWrap}>
      {
        /* prev btn */
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
        /* 1st btn */
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

      {setPageNums().map((pageNum) => {
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
      })}
      {
        /* last btn */
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
        /* next btn */
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
}
