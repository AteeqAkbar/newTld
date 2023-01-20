export const COLUMNS = [
  // {
  //   Header: "Image",
  //   accessor: "summry.image",
  // },
  {
    Header: "Image",
    Cell: (row) => (
      <div>
        <img className="img-responsive" src={"user.user.summry.image"} />
      </div>
    ),
  },
  {
    Header: "Name",
    accessor: "summry.displayName",
  },

  {
    Header: "Email",
    accessor: "summry.email",
  },
];
