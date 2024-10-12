import logo from '../../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className="text-center pt-4">
            <div className='flex justify-center items-center flex-col gap-4 mt-6'>
                <img className='md:w-96 w-80' src={logo} alt="" />
                <p className='md:text-xl text-sm'>Journalism Without Fear or Favour</p>
                <p className='text-sm'>{moment().format("dddd, MMMM, Do YYYY, h:mm a")}</p>
            </div>
        </div>
    )
}

export default Header