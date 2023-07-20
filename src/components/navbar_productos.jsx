import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';
import './style_navMenu.css';
import product from "../database/data.json";


const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    let menuFamily = [];
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className="navbar-text-body"
                style={{ color: '#263238' }}
            >
                Productos
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {
                    // uso un .map() y un condicional para crear un enlace por cada family que se encuentra 
                    product.map((element, index) => {

                        if (!menuFamily[element.family]) {
                            menuFamily[element.family] = true;
                            return <NavLink key={index} to={`category/${element.family}`} className="nav-menu"><MenuItem onClick={handleClose} >{`${element.family}`}</MenuItem></NavLink>;
                        }

                    })

                }
            </Menu>
        </div>
    );
}

export default BasicMenu;