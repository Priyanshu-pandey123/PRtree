import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";

const columns = [
  { field: "publication", headerName: "Publication", width: 250 },
  { field: "da", headerName: "DA", width: 100 },
  { field: "pa", headerName: "PA", width: 100 },
  { field: "tat", headerName: "TAT (in Hours)", width: 150 },
  { field: "backlinks", headerName: "Backlinks", width: 150 },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: () => (
      <a href="#" style={{ color: "black", textDecoration: "underline" }}>
        Buy Now
      </a>
    ),
  },
];

const rows = [
  {
    id: 1,
    publication: "Hindustan Times",
    da: 93,
    pa: 73,
    tat: 72,
    backlinks: "01",
  },
  {
    id: 2,
    publication: "Times Of India",
    da: 94,
    pa: 76,
    tat: 72,
    backlinks: "01",
  },
  {
    id: 3,
    publication: "Economic Times",
    da: 91,
    pa: 59,
    tat: 72,
    backlinks: "01",
  },
  {
    id: 4,
    publication: "Khaleej Times",
    da: 87,
    pa: 66,
    tat: 72,
    backlinks: "01",
  },
  { id: 5, publication: "Livemint", da: 91, pa: 70, tat: 72, backlinks: "01" },
  { id: 6, publication: "Midday", da: 85, pa: 63, tat: 72, backlinks: "01" },
  { id: 7, publication: "News24", da: 50, pa: 53, tat: 72, backlinks: "01" },
  { id: 8, publication: "The Week", da: 78, pa: 56, tat: 72, backlinks: "01" },
  {
    id: 9,
    publication: "Business Standard",
    da: 89,
    pa: 69,
    tat: 72,
    backlinks: "01",
  },
  {
    id: 10,
    publication: "Republic World",
    da: 80,
    pa: 64,
    tat: 72,
    backlinks: "01",
  },
  {
    id: 11,
    publication: "Republic World",
    da: 98,
    pa: 72,
    tat: 72,
    backlinks: "01",
  },
  { id: 12, publication: "Tribune", da: 84, pa: 64, tat: 72, backlinks: "01" },
  {
    id: 13,
    publication: "The Print",
    da: 80,
    pa: 60,
    tat: 72,
    backlinks: "01",
  },
  {
    id: 14,
    publication: "Deccan Herald",
    da: 84,
    pa: 66,
    tat: 72,
    backlinks: "01",
  },
  {
    id: 15,
    publication: "Telegraph",
    da: 82,
    pa: 64,
    tat: 72,
    backlinks: "01",
  },
];

const AdminTable = () => {
  return (
    <div className="table-data p-6">
      <Paper sx={{ height: 600, width: "100%" }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[10, 20, 25, 50]}
          sx={{
            border: 0,
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f5f5",
              fontWeight: "bold",
            },
            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#f5f5f5",
            },
          }}
        />
      </Paper>
    </div>
  );
};

export default AdminTable;
