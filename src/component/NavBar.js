/* NavBar page contains input search and list of all genres.
*/ 
import React, { Component } from 'react';
import '../styles/NavBar.css';
import Logo from '../images/logo.png';
import { getGener } from '../services/Common';
import Menu from '../images/menu.svg';
class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            showSearch: false,
            generList: [],
            isMenuOpen: false
        }
    }
    async componentDidMount() {
        //fetch Api data from getGener() function.
        const generList = await getGener();
        this.setState({ generList: generList })
    }
    search = (e) => {
        e.preventDefault();
        this.setState({ inputValue: e.target.value, showSearch: true });
        window.location.href = `http://localhost:3000/showsearch/${e.target.value}`;
    }
    clickMenu = () => {
        this.setState({ isMenuOpen: !this.state.isMenuOpen })
    }
    render() {
        const { generList } = this.state;
        return (
            <div className="header">
                <nav>
                    <ul>
                        <li className="logo">
                            <a href="/" >
                                <img src={Logo} className="logo_img" alt="logo" />
                                <h3>TVMaze</h3>
                            </a>
                        </li>
                        <li className="btn">
                            <img src={Menu} alt="side menu" onClick={this.clickMenu} />
                            {this.state.isMenuOpen ? <div className="menu_container"> <a href="/">
                               <p  className="side_menu">Home</p>
                           </a><div className="dropdown" >
                               {/* List of all genres in mobile and tab view */}
                                {generList&&generList.map((item, index) => (                              
                              <div key={index}>
                                     <a href={`/tv/showsearch/${item}`}>
                                        <p className="side_menu">{item}</p>
                                    </a>
                                </div>
                            ))}
                            </div></div> : ""}
                        </li>
                        <div className="items">
                            <div className="dropdown">
                                <li><a >SHOWS</ a></li>
                                {/* List of all genres in desktop view */}
                                <div className="dropdown-content">{generList.map((item, inex) => (
                                    <a href={`/tv/showsearch/${item}`} key={inex}>
                                        <p>{item}</p>
                                    </a>
                                ))}
                                </div>
                            </div>

                        </div>
                        {/* input for searching movies and shows */}
                        <li className="search_icon">
                            <input placeholder="Search movie names" type="search"
                            id="inputSearch"
                                onKeyPress={event => {
                                    if (event.key === 'Enter') {
                                        this.search(event)
                                    }
                                }} />
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Navbar;

