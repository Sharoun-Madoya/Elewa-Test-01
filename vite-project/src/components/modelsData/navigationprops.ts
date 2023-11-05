// defining the interface objects for the NavigationItems

export interface NavigationItems{
    title:string;
    about:string;
    impact:string;
    invest:string;
    news:string;
    cont:string;
}

const Navigation:NavigationItems[]=[
    {
    title:"Navigation",
    about: "About us",
    impact: "Social impact",
    invest: "Invest",
    news: "News",
    cont: "Contact"
    },
]

export default Navigation;