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
       <div class="w-100">
           <ul class="nav nav-tab">
               {
                tabsData.map(({tab}, index) => (
                    <li class="nav-item">
                        <a class={'nav-link ${idx === activeTab ? "active" : ""}'} 
                           href="#" onClick={() => setActiveTab(index)}
                           >
                            {tab}                           
                           </a>
                        </li>
                   ))
               }
           </ul>
           <div class="tab-content p-3">
               {tabsData[activeTab] && tabsData[activeTab].children}
           </div>
       </div>
    )
}

const TabPane = ({ children }) => {
    return {children};
};

Tab.TabPane = TabPane;