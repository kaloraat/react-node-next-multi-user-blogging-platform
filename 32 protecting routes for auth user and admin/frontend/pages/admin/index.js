import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <h2>Admin Dashboard</h2>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
