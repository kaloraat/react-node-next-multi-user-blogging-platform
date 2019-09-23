import Layout from '../components/Layout';
import SignupComponent from '../components/auth/SignupComponent';
import Link from 'next/link';

const Signup = () => {
    return (
        <Layout>
            <h2>Signup page</h2>
            <SignupComponent />
        </Layout>
    );
};

export default Signup;
