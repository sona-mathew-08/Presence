import { Typography } from "@material-tailwind/react";
 
export default function Example() {
  return (
    <footer className="w-full bg-black  p-8">
      <div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12  text-center md:justify-between">
        {/* <img src="/img/logo-ct-dark.png" alt="logo-ct" className="w-10" /> */}
        <span className='text-3xl text-cyan-600 mr-1 pt-2'>
        <ion-icon name="logo-ionic"></ion-icon>Presence
        </span>
        <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" text-cyan-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              About Us
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-cyan-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              License
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className="text-cyan-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contribute
            </Typography>
          </li>
          <li>
            <Typography
              as="a"
              href="#"
              color="blue-gray"
              className=" text-cyan-600 font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
            >
              Contact Us
            </Typography>
          </li>
        </ul>
      </div>
      <hr className="my-8 border-blue-gray-50" />
      <Typography color="blue-gray" className=" text-cyan-600 text-center font-normal">
        &copy; 2023 Presence
      </Typography>
    </footer>
  );
}