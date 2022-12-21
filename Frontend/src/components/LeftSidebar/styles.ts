import Link from "next/link";

import styled from 'styled-components'

export const SidebarMenu = styled.div`
    box-sizing: border-box;
    border-radius: 20px;
    
    transition: .6s;
    position: fixed;
    left: 3.5rem;
    bottom: 3rem;
    width: 100px;
`

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1rem 0 1.25rem;  
`;

export const MenuItemLinks = styled(Link)`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #000;
    &:hover {
        /* background-color: #FF; */
        color: blue;
        width: 100%;
        border-radius: 5px;
    }
`

