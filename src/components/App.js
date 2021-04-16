import React from 'react'
import Header from './header/Header'
import SidebarRight from './sidebars/SidebarRight'
import MailboxOnboarding from './mailboxOnboarding/MailboxOnboarding'

const App = () => {
    return(
        <>
            <Header />
            <div className="container">
                <div className="content">
                    <MailboxOnboarding />
                </div>
                <SidebarRight />
            </div>
        </>
    )
}

export default App
