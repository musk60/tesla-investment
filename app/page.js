import Hero from '../components/Hero'

export default function Home() {
    return (
        <div>
            <Hero />
            <section style={{ padding: '4rem 2rem', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Why Invest in Tesla?</h2>
                <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--tesla-gray)' }}>
                    Accelerating the world's transition to sustainable energy. Join us in building a cleaner future.
                </p>
            </section>
        </div>
    )
}
