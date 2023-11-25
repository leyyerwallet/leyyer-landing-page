import { Typography } from '@material-tailwind/react'
const Section2 = () => {
  return (
    <div className="container-fluid grid grid-cols-2 gap-4 my-6 py-8">
        <div className=''>
        <img src={"src/assets/app-mockup.png"}/>
        </div>
        <div className=''>
        <Typography
              variant="h2"
              color="black"
              className="font-poppins left-0 font-bold"
            >
              Manage your crypto portfolio securely
            </Typography>
        <Typography variant="h4" color="black" className="font-poppins font-[40px]">
        Buy, sell & swap the cryptocurrencies you want anytime, anywhere.
            </Typography>
        </div>
        </div>
  )
}

export default Section2