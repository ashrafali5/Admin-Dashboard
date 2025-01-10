import { HiSortAscending, HiSortDescending } from "react-icons/hi";
import {
  Column,
  TableOptions,
  useSortBy,
  usePagination,
  useTable,
} from "react-table";

function TableHoc<T extends Object>(
  columns: Column<T>[],
  data: T[],
  containerClassname: string,
  heading: string,
  showPagination: boolean = false
) {
  return function HOC() {
    const options: TableOptions<T> = {
      columns,
      data,
      initialState: {
        pageSize: 6,
      },
    };
    const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      page,
      pageCount,
      state: { pageIndex },
      prepareRow,
      nextPage,
      previousPage,
      canNextPage,
      canPreviousPage,
    } = useTable(options, useSortBy, usePagination);
    return (
      <div className={containerClassname}>
        <h2 className="heading">{heading}</h2>
        <table className="table" {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => {
              const { key: headerKey, ...headerProps } =
                headerGroup.getHeaderGroupProps();
              return (
                <tr key={headerKey} {...headerProps}>
                  {headerGroup.headers.map((column) => {
                    const { key: columnKey, ...columnProps } =
                      column.getHeaderProps(column.getSortByToggleProps());
                    return (
                      <th key={columnKey} {...columnProps}>
                        {column.render("Header")}
                        {column.isSorted && (
                          <span>
                            {column.isSortedDesc ? (
                              <HiSortDescending />
                            ) : (
                              <HiSortAscending />
                            )}
                          </span>
                        )}
                      </th>
                    );
                  })}
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              const { key: rowKey, ...rowProps } = row.getRowProps();
              return (
                <tr key={rowKey} {...rowProps}>
                  {row.cells.map((cell) => {
                    const { key: cellKey, ...cellProps } = cell.getCellProps();
                    return (
                      <td key={cellKey} {...cellProps}>
                        {cell.render("Cell")}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        {showPagination && (
          <div className="tablePagination">
            <button disabled={!canPreviousPage} onClick={previousPage}>
              Prev
            </button>
            <span>{` ${pageIndex + 1} / ${pageCount} `}</span>
            <button disabled={!canNextPage} onClick={nextPage}>
              Next
            </button>
          </div>
        )}
      </div>
    );
  };
}

export default TableHoc;
