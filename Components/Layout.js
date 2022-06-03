// import Navbar from "./Navbar";
import Navigationbar from "./Navigationbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
    <div className="content">
        <Navigationbar/>
        { children }
        <Footer />
    </div> 
    );
}
 
export default Layout;