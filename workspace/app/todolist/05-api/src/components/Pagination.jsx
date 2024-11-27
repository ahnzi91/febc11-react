import { Link, useSearchParams } from "react-router-dom";

function Pagination({ totalPages, current = 1 }) {
  let pageList = [];
  const [searchParams] = useSearchParams();

  for (let page = 1; page <= totalPages; page++) {
    searchParams.set("page", page);
    let search = searchParams.toString();
    pageList.push(
      <li className={current === page ? "active" : ""} key={page}>
        <Link to={`/list?${search}`}>{page}</Link>
      </li>
    );
  }

  return (
    <div className="pagination">
      <ul>{pageList}</ul>
    </div>
  );
}

export default Pagination;
