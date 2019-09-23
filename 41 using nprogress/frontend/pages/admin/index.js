import Layout from '../../components/Layout';
import Admin from '../../components/auth/Admin';
import Link from 'next/link';

const AdminIndex = () => {
    return (
        <Layout>
            <Admin>
                <div className="container-fluid">
                    <h2>Admin Dashboard</h2>
                </div>
            </Admin>
        </Layout>
    );
};

export default AdminIndex;
