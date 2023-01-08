import React from 'react';
import {Route, Routes} from "react-router-dom";
import {useSelector} from "react-redux";
import Registration from "../Aurhorization/Registration";
import Login from "../Aurhorization/Login";
import Navbar from "../Navbar/Navbar";

const useRoutes = () => {
    const isAuth = useSelector(state => state.user.isAuth)
    return (
        <>
            {!isAuth ?
                <Routes>
                    <Route path="/registration" element={<Registration/>}/>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="*" element={<Navbar to="/"/>}/>
                </Routes>
                :
                <Routes>
                    <Route path="*" element={<Navbar to="/"/>}/>
                </Routes>
            }
        </>

    );
};

export default useRoutes;