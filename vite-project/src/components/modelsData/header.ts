// defining the interface objects for the headerItems that are displayed in the Navbar

interface HeaderItems{
    headerText: string;
    path:string
}

const Header:HeaderItems[]=[
    {
        headerText:"House",
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