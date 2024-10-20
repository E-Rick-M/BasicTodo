import {Fragment} from 'react';
import classes from './header.module.css'
function Header(){
    return(
        <Fragment>
            <header className={classes.header}>
                <ul className={classes.ul}>
                    <li className={classes.li}>Basic To-Do</li>
                </ul>
            </header>
        </Fragment>
    )
}
   
export default Header