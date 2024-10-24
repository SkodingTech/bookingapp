// /pages/shared.js
// export const getServerSideProps = async (context) => {
//     const role = context.req.session?.role || null;
  
//     if (role !== 'admin' && role !== 'club_owner') {
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
  
  const SharedPage = () => {
    return <h1>Shared Page for Admins and Club Owners</h1>;
  };
  
  export default SharedPage;
  