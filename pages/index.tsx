import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/Layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.headingMd}>
                Hi! This is my
                <a href="/post" className={utilStyles.alink}>
                    {" "}
                    blogs
                </a>
                .
            </section>
            <section className={utilStyles.headingMd}>
                This is my
                <a
                    target="blank"
                    href="https://github.com/John516csd"
                    className={utilStyles.alink}
                >
                    {" "}
                    github{" "}
                </a>
                address.
            </section>
        </Layout>
    );
}
