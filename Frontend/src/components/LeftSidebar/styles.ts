//@ts-nocheck
import styled from 'styled-components'
import Link from "next/link";

export const SidebarMenu = styled.div`
    box-sizing: border-box;
    border-radius: 20px;
    z-index: 2;
    transition: .6s;
    position: fixed;
    left: 3.5rem;
    bottom: 3rem;
    width: 100px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const MenuItems = styled.li`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 1rem 0 1.25rem;
`;

export const MenuItemLinks = styled.a`
    display: flex;
    align-items: center;
    padding: 0 2rem;
    font-size: 20px;
    text-decoration: none;
    color: #fff;
    &:hover {
        color: green;
        width: 100%;
        border-radius: 5px;
    }
`