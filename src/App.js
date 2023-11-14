import React, { useEffect } from 'react'
import { Navbar, Footer, Sidebar, ThemeSettings, UserProfile } from './components';
import { Calendar, Customers, Stocks, Orders, Kanban, Pie, Bar, Stacked } from './pages';
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'
import { useStateConstant } from './contexts/ContextProvider';
import Calender from './pages/Calender';
import Themes_settings from './components/Themes_settings';
const App = () => {
    const {activeMenu, themeSettings, setThemeSettings, currentColor, currentMode} = useStateConstant();
    return (
        <BrowserRouter>
            <div className= {currentMode === 'Dark' ? 'dark' : ''} style={{display: 'flex', position: 'relative'}}>
                <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
                    <TooltipComponent content="Settings" position="Top">
                        <button type='button'
                            className='text-3xl p-3 
                        hover:drop-shadow-xl 
                        hover:bg-light-gray text-white'
                        onClick={() => setThemeSettings(true)}
                            style={{
                                background: currentColor,
                                borderRadius: '50%'
                            }}>
                            <FiSettings />
                        </button>
                    </TooltipComponent>
                </div>
                {activeMenu ? (
                    <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg
                    bg-white'>
                        <Sidebar />
                    </div>
                ) : (
                    <div className='w-0 dark:bg-secondary-dark-bg'>
                        <Sidebar />
                    </div>
                )}
                <div className={`dark:bg-main-dark-bg bg-main-bg min-h-screen w-full ${activeMenu ? 'md:ml-72' : 'flex-2'}`}>
                    <div className='fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full'>
                        <Navbar />
                    </div>

                <div>
                    {themeSettings && <Themes_settings />}
                    <Routes>
                        <Route path='/' element={<UserProfile />} />
                        <Route path='/home' element={<UserProfile />} />
                        <Route path='/orders' element={<Orders />} />
                        <Route path='/stocks' element={<Stocks />}  />
                        <Route path='/customers' element={<Customers />}  />
                        <Route path='/To Do App' element={<Kanban />} />
                        <Route path='/Calendar' element={<Calender />}/>
                        <Route path='/pie-chart' element={<Pie Chart />} />
                        <Route path='/bar-chart' element={<Bar Chart />} />
                        <Route path='/stacked-chart' element={<Stacked />} />
                    </Routes>
                </div>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App