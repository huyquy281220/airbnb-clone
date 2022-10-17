import { Header } from "../components";
import { Footer } from "../components";

function DefaultLayout({ children }: { children: React.ReactNode | React.ReactNode[] }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
