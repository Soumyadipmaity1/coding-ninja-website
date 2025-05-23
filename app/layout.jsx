
import '@styles/globals.css';
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

export const metadata = {
  title: 'Coding Ninjas: KIIT Chapter',
  description: 'Official website for Coding Ninjas: KIIT Chapter',
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className="bg-[#141819]">
        <div className="min-h-screen bg-black text-white">
          
          <header id="" className="sticky top-0 z-50">
            <Navbar />
          </header>

          <main className="">
            <div className="">{children}</div>
          </main>

          <footer className="mt-auto">
            <Footer />
          </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;

