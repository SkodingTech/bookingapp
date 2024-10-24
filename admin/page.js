// /pages/admin.js
// export const getServerSideProps = async (context) => {
//     const role = context.req.session?.role || null;
  
//     if (role !== 'admin') {
//       return {
//         redirect: {
//           destination: '/unauthorized',
//           permanent: false,
//         },
//       };
//     }
  
//     return {
//       props: {}, // Return props if role is valid
//     };
//   };
  
  const AdminPage = () => {
    return <h1>Admin Page - Access Granted</h1>;
  };
  
  export default AdminPage;
  