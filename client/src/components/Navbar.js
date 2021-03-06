import axios from "axios"
import { navigate } from "@reach/router";
import { Link } from "@reach/router";


const Navbar = () => {
    

    const logOut = (e) => {
        e.preventDefault();
        axios.get('/api/logout')
            .then(res => {console.log(res); navigate("/")})
            .catch(err => console.log(err))
    }
    return (
        <div>
            <header className="relative">
            <nav className="bg-steel">
                <div className="bg-steel  px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                    <h3 className="text-4xl font-bold bg-tahiti-500 text-silver font-head">Travel Blog</h3>

                    <div className="container flex flex-wrap justify-between items-center mx-auto">
                        <div className="hidden w-full md:block md:w-auto">
                            <Link to="/dashboard" className="nav-item nav-link text-2xl italic mr-4">Home</Link>
                            <button className="nav-item nav-link text-2xl italic mr-4" href="{% url 'blog-about' %}">About</button>
                            <Link to="/create_article" className="nav-item nav-link text-2xl italic">Add a Post</Link>
                        </div>

                        <div className="hidden w-full md:block md:w-auto">
                            <Link to="/" className="nav-item nav-link text-2xl italic mr-4">Login</Link>
                            <Link to="bloggers/register" className="nav-item nav-link text-2xl italic mr-4">Register</Link>
                            <button className="nav-item nav-link text-2xl italic" onClick={logOut}>Logout</button>
                        </div>
                    </div>
                </div>
            </nav>
            </header>
        </div>
    )
}

export default Navbar
