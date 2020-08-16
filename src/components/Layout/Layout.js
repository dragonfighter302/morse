import React from 'react';
import s from './Layout.module.css'

const Layout = (props) => {
    return (
        <div className={s['layout']}>
            <React.Fragment>
                {props.children}
            </React.Fragment>
        </div>
    )
}

export default Layout;