// defining the interface objects for the PrivacyItems
interface PrivacyItems{
    title:string;
    terms: string;
    cookie: string;
}

const Privacy:PrivacyItems[]=[
    {
    title:"Privacy",
    terms: "Terms and conditions",
    cookie: "Cookie preferences",
    },
]

export default Privacy;