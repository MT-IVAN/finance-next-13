'use client'

import { useEffect, useState } from "react"
import axios from 'axios'

function getDailyExpenses() {
  return +(Math.random()*100).toFixed(0)
}

function getMonthlyExpenses() {
  return +(Math.random()*100).toFixed(0)
}



export default function Home() {
  
  const [monthlyValue, setMonthlyValue] = useState(0)
  const [dailyValue, setDailyValue] = useState(0)
  const [trx, setTrx] = useState([])

  async function getTrx() {
    const result = await axios.get("http://localhost:4000")
    setTrx(result)
  }
  

  useEffect(() => {
    setMonthlyValue(getDailyExpenses())
    setDailyValue(getMonthlyExpenses())
    getTrx()

  }, [])
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10 py-20">
      


      <div className=" text-center">

        
        <h2 className={`mb-3 text-2l font-semibold`}>
          Monthly Budget{' '}
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${monthlyValue}%`}}> {monthlyValue}%</div>
          </div>
        </h2>
        <p className={`m-0 text-sm opacity-50 text-center`}>
          $1'050.000 / $2'500.000
        </p>
        

       
        <h2 className={`mb-3 text-2l font-semibold`}>
          Daily Budget{' '}
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
            <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${dailyValue}%`}}> {dailyValue}%</div>
          </div>
        </h2>
        <p className={`m-0 text-sm opacity-50`}>
          $10.000 / $50.000
        </p>

        <div className='transaction-header'>
          Daily Transactions
        </div>
        

        <form className="flex items-center">   
            <label className="sr-only">Search</label>
            <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="18" height="20" fill="none" viewBox="0 0 18 20">
                      <path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M12 2h4a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4m6 0v3H6V2m6 0a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1M5 5h8m-5 5h5m-8 0h.01M5 14h.01M8 14h5"/>
                    </svg>
                </div>
                <input 
                  type="text" 
                  id="simple-search" 
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                  placeholder="Search trx name..." required/>
            </div>
            <button type="submit" className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
            </button>
        </form>
        

        <table className="table-fixed table-margin">
        <thead>
          <tr>
            <th className="w-1/2 px-4 py-2">---</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-1 py-1">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
           
            <div className="border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-1">
                <p className="text-xs text-gray-300 flex items-center">
                  12:45PM 01-SEP-2023
                </p>
                <div className="text-gray-100 font-bold text-xl mb-1 text-left">Coffee Deliyogen</div>
                <p className="text-gray-400 text-base text-left text-xs">Tarjeta</p>
                <p className="text-gray-400 text-base text-left">$15,000</p>
              </div>
            </div>
          </div>
            </td>
          </tr>
          <tr>
            <td className="border px-1 py-1">
            <div className="max-w-sm w-full lg:max-w-full lg:flex">
           
            <div className="border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-1">
                <p className="text-xs text-gray-300 flex items-center">
                  12:45PM 01-SEP-2023
                </p>
                <div className="text-gray-100 font-bold text-xl mb-1 text-left">Coffee Deliyogen</div>
                <p className="text-gray-400 text-base text-left text-xs">Tarjeta</p>
                <p className="text-gray-400 text-base text-left">$15,000</p>
              </div>
            </div>
          </div>
            </td>
          </tr>
        </tbody>
      </table>

      
      </div>
    </main>
  )
}
