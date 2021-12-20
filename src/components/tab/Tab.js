import React, { useState, useEffect } from 'react';

export default function Tab({ children, active }) {

    const [activeTab, setActiveTab] = useState(active);
    const [tabsData, setTabsData] = useState([]);

useEffect(() => {
        let data = [];
        React.Children.forEach(children, element => {
            if(!React.isValidElement(element)) return;

            const {props: { tab, children }} = element;
            data.push({tab, children});
        })
    setTabsData(data);
}, [children])



    return (
       <div>
           <ul className="nav nav-tabs">
               {
                tabsData.map(({tab}, index) => (
                    <li className="nav-item">
                    <a className={`nav-link ${activeTab === index ? "activeTab" : ""}`} 
                           href="#" onClick={() => setActiveTab(index)} 
                           >
                            {tab}                        
                        </a>
                    </li>
                   ))
               }
               
           </ul>
           <div className="tab-content p-3">
               {tabsData[activeTab] && tabsData[activeTab].children}
           </div>
       </div>
    )
}

const TabPane = ({ children }) => {
    return {children};
};

Tab.TabPane = TabPane;