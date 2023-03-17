import React, { useMemo } from "react";
import { useTable, useSortBy, usePagination } from "react-table";
import Image from "next/image";
import { BiFirstPage } from "react-icons/bi";
import { BiLastPage } from "react-icons/bi";
import { MdEditNote } from "react-icons/md";
import Link from "next/link";

function SessionTable({ sessions, select }) {
  let address =
    select == "Past Sessions" ? "/admin/pastSession/" : "/admin/session/";
  const COLUMNS = [
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
      Header: "Title",
      accessor: "title",
    },
    {
      Header: "Instructor",
      accessor: "instructor.summry.displayName",
    },

    {
      Header: "Start Time",
      accessor: "StartSession",
    },
    {
      Header: "End Time",
      accessor: "EndSession",
    },
    {
      Header: "Edit",
      Cell: (row) => (
        <Link href={`${address}${row.row.original.id}`} className="flex">
          <MdEditNote className="m-auto w-[25px] h-[25px]" />
        </Link>
      ),
    },
  ];

  // save session props data in mock data
  // const MOCK_DATA = sessions.sessions;
  const MOCK_DATA = sessions;
  console.log(MOCK_DATA, "tav");
  const convertDate = (datetime) => {
    // functin to convert start and end session date time form seconds to datetime formate
    const date = new Date(datetime.seconds * 1000).toLocaleDateString();
    const time = new Date(datetime.seconds * 1000).toLocaleTimeString();
    datetime = date + " " + time;
    return datetime;
  };

  const mockdata = MOCK_DATA.map((mock) => {
    // map MOCKDATA and add readable start and end session datetime into each object of array
    const StartSession = convertDate(mock.startTime);
    const EndSession = convertDate(mock.endTime);
    return { ...mock, StartSession, EndSession };
  });

  // console.log(mockdata, "data--------------");

  // console.log(MOCK_DATA, "first Data");

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => mockdata, []);

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
          <h2 className="text-[20px] font-semibold font-['Raleway']">
            {/* Sessions */}
            {select}
          </h2>
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

export default SessionTable;
