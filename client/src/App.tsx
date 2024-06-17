import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Auth from '@/pages/auth';
import  Dashboard  from '@/pages/dashboard';
import { FinancialRecordsProvider } from './contexts/financial-records-contexts';

const App = () => {
  return (
    
    <Router>
      <div className="app-container">
        <Routes>
          <Route 
            path="/" 
            element={
              <FinancialRecordsProvider>
                <Dashboard/>
              </FinancialRecordsProvider>
            }
          />
          <Route path="/auth" element={<Auth/>}></Route>
          <Route path="/a" element={<h1>Dashboard</h1>}></Route>
        </Routes>
      </div>
    </Router>
  )
}

export default App