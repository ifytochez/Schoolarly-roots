import React from "react";
import { useTable, usePagination } from "react-table";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageIndex,
    pageSize,
    gotoPage,
    setPageSize,
    nextPage,
    previousPage,
    pageCount,
    state: { pageIndex: currentPage },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 5 },
    },
    usePagination
  );

  return (
    <div>
      <div
        className="font-airbnb text-lg bg-[#f3f3f3]"
        style={{
          borderRadius: "0.5rem",
          overflow: "hidden",
        }}
      >
        <table
          {...getTableProps()}
          className="min-w-full table-auto"
          style={{
            borderCollapse: "separate",
            borderSpacing: "0",
          }}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps({
                      className: `px-4 py-2 text-left border-b ${
                        column.customClassName || ""
                      }`,
                      style: column.customStyle || {},
                    })}
                  >
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      className="px-4 py-3 border-b text-[rgba(89,89,89,1)]"
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-end items-center mt-4 gap-8 text-[rgba(89,89,89,1)]">
        <button
          onClick={() => gotoPage(0)}
          disabled={!canPreviousPage}
          className="text-black"
        >
          {"<<"}
        </button>
        <button
          onClick={() => previousPage()}
          disabled={!canPreviousPage}
          className="text-[rgba(89,89,89,1)]"
        >
          Previous
        </button>
        <button
          onClick={() => nextPage()}
          disabled={!canNextPage}
          className="text-[rgba(89,89,89,1)]"
        >
          Next
        </button>
        <button
          onClick={() => gotoPage(pageCount - 1)}
          disabled={!canNextPage}
          className=" text-black"
        >
          {">>"}
        </button>

        <span>
          Page {currentPage + 1} of {pageCount}
        </span>

        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
          className="px-4 py-2 border rounded"
        >
          {[5, 10, 20].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Table;
