import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

export default function PaginationComponent(props) {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  return (
    <Pagination>
      <Pagination.Prev
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1 ? true : false}
      />
      <Pagination.Next
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === pagesCount ? true : false}
      />
      {}
      <p style={{ margin: "4px" }}>
        {currentPage} out of {pagesCount}
      </p>
    </Pagination>
  );
}

export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //_(items) to convert it into an lodash object so we can chain all lodash methods and then with value we convert it back into an array
  return _(items).slice(startIndex).take(pageSize).value();
}
