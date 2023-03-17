import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import Image from "next/image";
import { BiFirstPage } from "react-icons/bi";
import { BiLastPage } from "react-icons/bi";
import { updateIndemandSkill } from "../../utils_firebase/skills";

function AllSkills(skills) {
  const COLUMNS = [
    {
      Header: "Skill Title",
      accessor: "name",
    },
    {
      Header: "Image",
      Cell: (row) => (
        <div className="relative w-[40px] h-[40px] pl-[40px] flex items-center">
          <Image
            src={row.row.original.image}
            className="rounded-full"
            alt="img"
            fill
          />
        </div>
      ),
    },
    {
      Header: "In Demands",
      Cell: (row) => (
        <select
          onChange={(e) => {
            console.log(e.target.value, row.row.original.id);
            updateIndemandSkill({
              id: row.row.original.id,
              indemand: JSON.parse(e.target.value.toLowerCase()),
            });
          }}
          className="text-[22px]"
        >
          <option selected={row.row.original.indemand === true} value={true}>
            true
          </option>
          <option selected={row.row.original.indemand === false} value={false}>
            false
          </option>
        </select>
      ),
    },
  ];

  const MOCK_DATA = skills.skills;

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  console.log(MOCK_DATA, "table");

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    state,
    prepareRow,
  } = tableInstance;

  const { pageIndex, pageSize } = state;

  return (
    <>
      <section className="min-h-[500px]">
        <div className="px-5 py-4 border-b border-gray-100">
          <h2 className="text-[20px] font-semibold font-['Raleway']">Skills</h2>
        </div>
        <div className="p-3">
          <table className="table-auto w-full" {...getTableProps()}>
            <thead className="text-md text-left font-bold uppercase text-gray-900 bg-[#dbdbdb]">
              {headerGroups.map((headerGroup) => (
                <tr
                  key={Math.random() + 5}
                  {...headerGroup.getHeaderGroupProps()}
                >
                  {headerGroup.headers.map((column) => (
                    <th
                      key={Math.random() + 5}
                      className="p-5 whitespace-nowrap"
                      {...column.getHeaderProps(column.getSortByToggleProps())}
                    >
                      {column.render("Header")}
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " 🔽"
                            : " 🔼"
                          : ""}
                      </span>
                    </th>
                  ))}
                </tr>
              ))}
            </thead>
            <tbody
              className="text-sm divide-y divide-gray-100"
              {...getTableBodyProps()}
            >
              {page.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    key={Math.random() + 5}
                    className="even:bg-gray-50 odd:hover:bg-blue-50"
                    {...row.getRowProps()}
                  >
                    {row.cells.map((cell) => {
                      return (
                        <td
                          key={Math.random() + 5}
                          className="p-2 whitespace-nowrap "
                          {...cell.getCellProps()}
                        >
                          {cell.render("Cell")}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="w-[100%] mx-auto bg-[#dbdbdb] py-4 ">
          <div className="w-[80%] flex justify-evenly mx-auto items-center gap-5">
            <span>
              Page{" "}
              <strong>
                {pageIndex + 1} of {pageOptions.length}
              </strong>{" "}
            </span>
            <span>
              | Go to Page:{" "}
              <input
                className="w-[50px] pl-1"
                type="number"
                defaultValue={pageIndex + 1}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </span>
            <select
              value={pageSize}
              onChange={(e) => setPageSize(Number(e.target.value))}
            >
              {[10, 25, 50].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
            <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
              <BiFirstPage className="w-[25px] h-[25px]" />
            </button>
            <button
              className="font-bold"
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              Previous
            </button>
            <button
              className="font-bold"
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <BiLastPage className="w-[25px] h-[25px]" />
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default AllSkills;
