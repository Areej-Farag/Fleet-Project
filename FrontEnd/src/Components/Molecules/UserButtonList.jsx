import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Button from '../Atoms/Button'
import '../Styles/Navbar.css'
import useUserStore from "../../Reducers/UserReducerStore";


export default function UserButtonList() {
    const { logout } = useUserStore();
    const { userId } = useParams();
  return (
    <div>
      <ul className="list-unstyled mb-0 d-flex flex-column ">
              <li>
                <Link  to ={`/wishlist/ ${userId}`} className="text-decoration-none ">
                  {" "}
                  Booking
                </Link>
              </li>
              <li>
              <Link  to ={`/wishlist/ ${userId}`} className="text-decoration-none ">
                  {" "}
                  WishList
                </Link>
              </li>
              </ul>
                <Button color="black" size="default" shape="default" onClick={logout} >
                  {" "}
                  Logout
                </Button>
             
    </div>
  )
}
