import { useState } from 'react'
import Score from './Score'

function Layout() {

    const[isClicked1,SetisClicked1] = useState(true)
    const[isClicked2, SetisClicked2] = useState(true)

    const handleClick1 = () => { 
        SetisClicked1(!isClicked1)
        SetisClicked2(!isClicked2)
    }
    const handleClick2 = () => {
        SetisClicked2(!isClicked2)
        SetisClicked1(!isClicked1)
    }

  return (
    <>

    <div className='flex flex-col min-h-screen bg-blue-200 pb-10'>

        {/* header */}
            <div className='text-center font-bold text-4xl mt-10'>
                <span>Leaderboard</span>
            </div>

            <div className='flex flex-col'>
                {/* switch */}
                <div className="flex justify-center items-center mt-8">
                    <div className="bg-white flex space-x-4 p-4 w-64 rounded-2xl shadow-lg">
                        <span className={`font-bold text-lg  ${isClicked1 ? 'text-blue-800' : 'text-black'}`}
                        onClick={handleClick1}>Organisation</span>
                        <span className={`font-bold text-lg  ${isClicked2 ? 'text-black' : 'text-blue-800'}`}
                        onClick={handleClick2}>Department</span>
                    </div>
                </div>

                {/*other ranks*/}
                <div className='mt-20'>
                    <Score />
                </div>

            </div>
    </div>
    </>
  )
}

export default Layout
