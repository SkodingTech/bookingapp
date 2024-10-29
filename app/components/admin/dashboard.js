import { getSession } from 'next-auth/react'; // or custom session handling

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || !['admin', 'superadmin'].includes(session.user.role)) {
    return {
      redirect: {
        destination: '/403',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}

const AdminDashboard = ({ session }) => {
  return <div>Welcome, {session.user.name}, to the Admin Dashboard</div>;
};

export default AdminDashboard;
