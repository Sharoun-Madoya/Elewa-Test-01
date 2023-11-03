// defining the interface objects for the headerItems

interface HeaderItems{
    headerText: string;
    path:string
}

const Header:HeaderItems[]=[
    {
        headerText:"Home",
        path:"/"

    },
    {
        headerText:"About",
        path:"/About"

    },
    {
        headerText:"Social impact",
        path:"/Social impact"

    },
    {
        headerText:"Invest",
        path:"/Invest"

    },
    {
        headerText:"Venture Labs",
        path:"/Venture Labs"

    },
    {
        headerText:"Brands",
        path:"/Brands"

    },
    {
        headerText:"Careers",
        path:"/Careers"

    },
    {
        headerText:"Contact",
        path:"/Contact"

    }
]

export default Header