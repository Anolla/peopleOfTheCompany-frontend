import Pagination from "react-bootstrap/Pagination";
import _ from "lodash";

export default function PaginationComponent  (props)  {
  const { itemsCount, pageSize, onPageChange } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);
  return (
    <Pagination>
      {pages.map((page) => {
        return (
          <Pagination.Item onClick={() => onPageChange(page)} key={page}>
            {page}
          </Pagination.Item>
        );
      })}
    </Pagination>
  );
};


export function paginate(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  //_(items) to convert it into an lodash object so we can chain all lodash methods and then with value we convert it back into an array
  return _(items).slice(startIndex).take(pageSize).value();
}

