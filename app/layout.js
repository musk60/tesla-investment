import './globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ChatWidget from '../components/ChatWidget'
import MaintenanceCheck from '../components/MaintenanceCheck'

export const metadata = {
    title: 'Tesla Investment',
    description: 'Invest in the future of energy.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <MaintenanceCheck />
                <Navbar />
                <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                    <div style={{ flex: 1 }}>{children}</div>
                    <Footer />
                </main>
                <ChatWidget />
            </body>
        </html>
    )
}
