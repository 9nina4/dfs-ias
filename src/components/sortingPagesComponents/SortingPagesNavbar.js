import React from 'react'
import dfs_logo_reverse_icon from "../.././assets/dfs_logo_reverse_icon.svg"
import {Link,useHistory, useLocation} from 'react-router-dom';
import fire from '../.././config/fire';
import { useState, useEffect } from 'react';

export default function SortingPagesNavbar() {

    const [user, setUser] = useState(null);
    const [rosterLinkStyle, setRosterLinkStyle] = useState({
        paddingLeft: "50px",
        paddingRight: "50px",
        height: "4vh",
        display: "flex",
        justifyContent: "space-around",
        alignTtems: "center",
    })
    const [sortedRosterLinkStyle, setSortedRosterLinkStyle] = useState({
        paddingLeft: "50px",
        paddingRight: "50px",
        height: "4vh",
        display: "flex",
        justifyContent: "space-around",
        alignTtems: "center",
    })
    const [shirtLinkStyle, setShirtLinkStyle] = useState({
        paddingLeft: "50px",
        paddingRight: "50px",
        height: "4vh",
        display: "flex",
        justifyContent: "space-around",
        alignTtems: "center",
    })


    let history = useHistory();
    let location = useLocation();
    
    useEffect(() => {
        // Update the document title using the browser API
        fire.auth().onAuthStateChanged(user => {
            if (user){
                setUser(user);
            }else{
                history.push('/');
            }
          });

          console.log(location.pathname)
          if (location.pathname === "/appjamhome/sortedroster"){
            setSortedRosterLinkStyle({
                backgroundColor: "#9097A3",
                color: "white", 
            });
        }else if (location.pathname === "/appjamhome/roster"){
            setRosterLinkStyle({
                backgroundColor: "#9097A3",
                color: "white", 
            });
        }else if(location.pathname === "/appjamhome/shirtsummary"){
            setShirtLinkStyle({
                backgroundColor: "#9097A3",
                color: "white", 
            });
        }
      }, [location.pathname, history]);


    const rosterEnter = () => {
        if (!(location.pathname === "/appjamhome/roster")){
            setRosterLinkStyle({
                backgroundColor: "#D2D5DA",
                color: "white",
            })
        }
        
    }

    const rosterLeave = () => {
        if (!(location.pathname === "/appjamhome/roster")){
            setRosterLinkStyle({
                backgroundColor: "white",
                color: "#5B7082",
            })
        }
    }

    const SortedRosterEnter = () => {
        if (!(location.pathname === "/appjamhome/sortedroster")){
            setSortedRosterLinkStyle({
                backgroundColor: "#D2D5DA",
                color: "white",
            })
        }
    }

    const SortedRosterLeave = () => {
        if (!(location.pathname === "/appjamhome/sortedroster")){
            setSortedRosterLinkStyle({
                backgroundColor: "white",
                color: "#5B7082",
            })
        }
    }

    const shirtEnter = () => {
        if (!(location.pathname === "/appjamhome/shirtsummary")){
            setShirtLinkStyle({
                backgroundColor: "#D2D5DA",
                color: "white",
            })
        }
    }

    const shirtLeave = () => {
        if (!(location.pathname === "/appjamhome/shirtsummary")){
            setShirtLinkStyle({
                backgroundColor: "white",
                color: "#5B7082",
            })
        }
    }



    // const location = useLocation();
    // console.log(location);

    return (
        <div className="sortingPagesNavbarWrapper">
            <nav className="sortingPagesNavbar">
                <ul className="sortingPagesNavbarLinks">
                    <Link to="/appjamhome/roster">
                        <li onMouseEnter={rosterEnter} onMouseLeave={rosterLeave} style={rosterLinkStyle} className="sortedRosterNavLink" >roster</li>
                    </Link>

                    <Link to="/appjamhome/sortedroster">
                        <li onMouseEnter={SortedRosterEnter} onMouseLeave={SortedRosterLeave} style={sortedRosterLinkStyle} className="sortedRosterNavLink">sorted roster</li>
                    </Link>

                    <Link to="/appjamhome/shirtsummary">
                        <li onMouseEnter={shirtEnter} onMouseLeave={shirtLeave} style={shirtLinkStyle} className="sortedRosterNavLink">shirt sizes</li>
                    </Link>
                </ul>
            </nav>
            
        </div>
    )

}