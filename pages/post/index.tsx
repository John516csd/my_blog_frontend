import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import Layout from "../../components/Layout";

const App = () => {
    return (
        <>
            <Layout home={undefined}>
                <Head>
                    <title>First Post</title>
                </Head>
                <Image src="/imgs/cloud.jpg" width={700} height={500} />
            </Layout>
        </>
    );
};
export default App;
