// pages/users/add-user.js
'use client'

import { UserProvider } from '../../context/UserContext';
import AddUser from '../../components/user_management/AddUser'

const AddUserPage = () => {
  return (
    <UserProvider>
    <div>
      <AddUser />
    </div>
    </UserProvider>
  );
};

export default AddUserPage;
