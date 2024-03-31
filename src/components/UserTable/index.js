import * as React from "react";
import Link from "next/link";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import styles from "@/styles/Components/UserTable.module.css";

export default function UserTable({ userData }) {
  return (
    <>
      <Typography component={"h3"} variant="h3" className={styles.title}>
        User List
      </Typography>
      <TableContainer component={Paper}>
        <Table aria-label="user table">
          <TableHead>
            <TableRow>
              <TableCell>Serial NO</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Email</TableCell>
              <TableCell align="center">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.id}
                </TableCell>
                <TableCell align="center">
                  <Link href={`/user/${row.id}`}>{row.name}</Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={`mailto:${row.email}`}>{row.email}</Link>
                </TableCell>
                <TableCell align="center">
                  <Link href={"http://" + row.website} target="_blank">
                    {row.website}
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
