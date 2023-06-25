import { BiPhoneCall } from 'react-icons/bi'
import { useContext } from 'react'
import { AiOutlineMail } from  'react-icons/ai'
import { Link,useLocation  } from 'react-router-dom'
import logo from "../assets/images/apneck.png"
import { VscAccount } from 'react-icons/vsc'
import { CgShoppingCart } from  'react-icons/cg'
import { AiOutlineHeart } from 'react-icons/ai'
import { ShopContext } from './shopcontext'

const header = () => {
  const location = useLocation();
  const {getTotalCartProducts} = useContext(ShopContext);
  const totalProducts = getTotalCartProducts();
  return (
    <>
    <header className='header-top-strip p-1 px-4 shadow-md'>
      <div className='container-xxl'>
      <div className='row align-items-center'>
      <div className='col-6'>
      <p>The trending outfits at 100% off</p>
      </div>
      <div className='col-6 d-flex justify-content-between'>
      <div>
      <a href='tel:+2455666'>Call us +2455666</a>
      </div>
      <div>
      <Link><BiPhoneCall className='fs-3 mx-2 mx-4'/></Link>
      <Link><AiOutlineMail className='fs-3 mx-2 mx-4'/></Link>
      </div>
      </div>
      </div> 
      </div>
    </header>
    <header>
    <div className='container-xxl'>
    <div className='row'>
    <div className='col-2 m-auto text-center'>
    <Link to='/'><img src={logo} alt="" className='img-fluif logo'/></Link>
    </div>
    <div className='col-3 d-flex align-items-center mt-3'>
    <div className='input-group mb-3'>
    <span className='input-group-text' id='basic-addon1'>All</span>
    <input type='text' className='form-control p-2' placeholder='Search products' aria-label="Recipient's username" arial-describedby="basic-adddon2"/>
    </div>
    </div>
    <div className='nav-links col-4 d-flex align-items-center justify-content-between text-center m-auto'>
          <Link to={'/'} className={location.pathname === '/' ? 'active':'inactive'}>Home</Link>
          <Link to={'shop'} className={location.pathname === '/shop' ? 'active' : 'inactive'}>Shop</Link>
          <Link to={'about'} className={location.pathname === '/about' ? 'active' : 'inactive'}>About</Link>
          <Link to={'contact'} className={location.pathname === '/contact' ? 'active' : 'inactive'}>Contact</Link>
    </div>
    <div className='nav-links-nav col-1 d-flex align-items-center justify-content-around'>
    <Link to={'wishlist'} className={location.pathname === '/wishlist' ? 'inactive' : 'active'}> 
    <div className="d-flex">
          <span><AiOutlineHeart className='fs-3 mx-2 '/></span>
          </div>
   </Link>
   <Link to={'login'} className={location.pathname === '/login' ? 'inactive' : 'active'} >
            <div className="d-flex">
            <span>
            <VscAccount className='fs-3 mx-2'/>
            </span>
            </div>
          </Link>
          <Link to={'cart'} className={location.pathname === '/cart' ? 'inactive' : 'active'}>
           <div className="d-flex">
           <span>
            <CgShoppingCart className='fs-3 mx-2'/>
            </span>
          <p >
          <span className="text-danger">
          {totalProducts > 0 && `(${totalProducts})`}
          </span>
          </p>
           </div>
          </Link>
    </div>
    </div>
    </div>
    </header>
    </>
  )
}

export default header