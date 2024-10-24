// /pages/club.js
// export const getServerSideProps = async (context) => {
//     const role = context.req.session?.role || null;
  
//     if (role !== 'club_owner') {
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
  
  const ClubPage = () => {
    return <h1>Club Owner Page - Access Granted</h1>;
  };
  
  export default ClubPage;
  