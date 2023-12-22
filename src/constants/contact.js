import phone from "../assets/icons/phone.png"
import mail from "../assets/icons/mail.png"
import location from "../assets/icons/location.png"
import whatsapp from "../assets/icons/whatsapp.png"

const contact = [{
    id:1,
    name:"Call Us",
    icon:phone,
    num:[{
        index:1,
        no:"+91 8362587442"
    },
    {
        index:2,
        no:"+91 8362587442"
    }]
},
{
    id:2,
    name:"Send Email",
    icon:mail,
    desc:"contact@gmail.com",
},
{
    id:3,
    name:"Address",
    icon:location,
    desc:"Jaisingpur"
},
{
    id:4,
    name:"Whatsapp",
    icon:whatsapp,
    desc:"Whatsapp"
},

]

export default contact;