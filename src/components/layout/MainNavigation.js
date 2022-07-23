import { NavLink } from "react-router-dom";

import classes from './MainNavigation.module.css';

const MainNavigation = ()=>{
return (
<header  className={classes.header}>
    <div className={classes.logo}>
        <nav className={classes.nav}>
            <ul>
                <li>
                 <NavLink to ='/quotes' activeClassName={classes.active}>
                    AllQuotes
                 </NavLink>
                </li>
                <li>
                 <NavLink to ='/new-quotes' activeClassName={classes.active}>
                    Add a quote
                 </NavLink>
                </li>
            </ul>
        </nav>
    </div>
</header>
)

}
export default MainNavigation;