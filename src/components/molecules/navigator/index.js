import {
  React,
  Navbar,
  NavItem,
  NavLink
} from '../../../libraries'

const Navigator = () => {
  const tabs = [{
    route: '/',
    label: 'Home'
  }, {
    route: '/purchased',
    label: 'Purchased'
  }, {
    route: '/wishlist',
    label: 'Profile'
  }]

  return (
    <Navbar bg='dark' className='navbar fixed-bottom w-100' role='navigation'>
      <div className=' d-flex flex-row justify-content-between w-100'>
        {
          tabs.map((tab, index) =>(
            <NavItem key={`tab-${index}`}>
              <NavLink to={tab.route} className='nav-link' activeClassName='active'>
                <div className='row d-flex flex-column justify-content-center align-items-center'>
                  <div>{tab.label}</div>
                </div>
              </NavLink>
            </NavItem>
          ))
        }
      </div>
    </Navbar>
  )
}

export default Navigator
