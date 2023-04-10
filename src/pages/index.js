import Head from "next/head";
import Header from "../components/Header";
import Navigation from "../components/Navigation";
import Products from "../components/Products";
import Maps from "../components/Maps";
import OpeningHours from "../components/OpeningHours";
import SubscribeForm from "../components/SubscribeForm";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <Head>
                <title>Pharmacie - Your One Stop Pharmacy Shop</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />

            <main>
                <Navigation />

                <section className="banner">
                    <div className="container">
                        <h2 className="banner__title">Your One Stop Pharmacy Shop</h2>
                        <p className="banner__description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </section>


                <Products />

                <Maps address="Paseo de Castellana 259E, Madrid, Spain" />

                <OpeningHours />

                <SubscribeForm />

                <ContactForm />
            </main>

            <Footer />
        </>
    );
}
