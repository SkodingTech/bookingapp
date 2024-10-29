import { getSession } from 'next-auth/react';

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || session.user.role !== 'superadmin') {
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

const SuperadminSettings = ({ session }) => {
  return <div>Welcome, {session.user.name}, to the Superadmin Settings</div>;
};

export default SuperadminSettings;
