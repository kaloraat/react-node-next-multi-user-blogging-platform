import Layout from '../components/Layout';
import SigninComponent from '../components/auth/SigninComponent';

const Signin = () => {
    return (
        <Layout>
            <div className="container-fluid">
                <h2 className="text-center pt-4 pb-4">Signin</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <SigninComponent />
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default Signin;
