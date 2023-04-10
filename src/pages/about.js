import Head from 'next/head';

const About = () => {
    return (
        <div>
            <Head>
                <title>About Us | Pharmacie</title>
            </Head>

            <div className="container mx-auto my-8">
                <h1 className="text-3xl font-bold mb-4">About Us</h1>
                <p className="mb-8">
                    Our Pharmacy
                    The Care You Deserve

                    PharmacIE was born from a realization that numerous individuals were failing to follow up after being prescribed medication by their physicians. We found a way to streamline the whole process in order to make it easier for everyone to heal.

                    Through our interventions and medication management protocols, we’re doing more than just providing medication. We care about your well-being, and aim to do everything in our power in order to make sure you’re receiving the treatment you need and deserve. With our professional staff of pharmacists and associates and a personal touch, we’re accomplishing the mission we set out to achieve: we’re helping the sick get better.
                </p>
            </div>
        </div>
    );
};

export default About;
