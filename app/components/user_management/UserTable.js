// components/UserTable.js
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, spacing, Button } from '@mui/material';
import Link from "next/link";
 
const user = [
  {
    id:1,
    name: "John Michael",
    email: "john@creative-tim.com",
    date: "23/04/18",
  },
  {
   id:2,
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    date: "23/04/18",
  },
  {
    id:3,
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    date: "19/09/17",
  },
  {
    id:4,
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    date: "24/12/08",
  },
  {
    id:5,
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    date: "04/10/21",
  },
];






export default function UserTable() {


  return (
 
   <>
   <div component={Paper} className="m-16 overflow-hidden">
    <Table className="min-w-full divide-y divide-gray-200">
      <TableHead>   
             <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
             <TableCell>Email</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Event</TableCell>
            <TableCell>Actions</TableCell>
           </TableRow>
     
      </TableHead>
      <TableBody>
        {user.map((user) => (
          <TableRow key={user.id}>
            <TableCell>{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.date}</TableCell>
            <TableCell>event</TableCell>
            <TableCell className="flex space-x-2">
              <Button 
                variant="contained" 
                color="primary" 
                className="mr-2"
              >
               <Link href="/users/useredit"> Edit </Link>
              </Button>
              <Button 
                variant="contained" 
                color="secondary"
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </div>
   
   </>
  );
}




