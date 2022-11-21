import React from 'react';
import { createGlobalStyle } from 'styled-components';
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro';
import './index.css';

const CustomStyles = createGlobalStyle({
    body: {
        WebkitTapHighlightColor: theme`colors.purple.500`,
        ...tw`antialiased`,
    },
    '.cartIn-enter': {
        top: '-56px',
    },
    '.cartIn-enter-active': {
        top: '0px',
        transition: 'top 500ms',
    },
    '.cartIn-enter-done': {
        top: '0px',
    },
    '.cartIn-exit': {
        top: '0px',
    },
    '.cartIn-exit-active': {
        top: '-56px',
        transition: 'top 500ms',
    },
    '.cartIn-exit-done': {
        top: '-56px',
    },
    '::-webkit-scrollbar': {
        width: '0.375rem !important',
        height: '0.375rem !important',
    },
    '::-webkit-scrollbar-track': {
        'background-color': 'rgb(241 245 249) !important',
    },
    '::-webkit-scrollbar-thumb': {
        'background-color': 'rgb(203 213 225) !important',
        ' border-radius': ' 0.25rem !important',
    },
});

const GlobalStyles = () => (
    <>
        <BaseStyles />
        <CustomStyles />
        <svg width='0' height='0' xmlns='http://www.w3.org/2000/svg'>
            <defs>
                <mask id='tel-icon-mask-001' maskUnits='userSpaceOnUse' x='11.26' y='0.399902' width='12' height='17' fill='black'>
                    <rect fill='white' x='11.26' y='0.399902' width='12' height='17' />
                    <path d='M15.5 15.3699C19.04 11.8299 21.7 7.1199 20.06 5.4799L18 3.3999L13.83 7.5599L16.34 10.0699L13.26 13.1499' />
                </mask>
                <mask id='tel-icon-mask-002' maskUnits='userSpaceOnUse' x='0.52002' y='11.1499' width='17' height='12' fill='black'>
                    <rect fill='white' x='0.52002' y='11.1499' width='17' height='12' />
                    <path d='M15.5 15.3699C12 18.8999 7.23002 21.5899 5.59002 19.9999L3.52002 17.8699L7.67002 13.7199L10.18 16.2299L13.26 13.1499' />
                </mask>
            </defs>
        </svg>
    </>
);

export default GlobalStyles;
