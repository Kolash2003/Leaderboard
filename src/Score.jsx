import rank1 from './assets/rank1.png'
import rank2 from './assets/rank2.png'
import rank3 from './assets/rank3.png'
import newrank3 from './assets/newrank3.png'
import newrank4 from './assets/newrank4.png'
import newrank5 from './assets/newrank5.png'
import newrank6 from './assets/newrank6.png'
import newrank7 from './assets/newrank7.png'

function Score() {

  return (
    <>
    <div className="flex justify-evenly flex-wrap">
        <div className="flex space-x-1 mb-6">

        <div className="flex flex-col items-center mt-8">
            <div><img src={rank2} alt="rank1-img" className="w-20 h-20" /></div>
                <div className="bg-[#3B5987] h-24 w-20 pl-3 text-white rounded-t-2xl font-bold">Jackson
                <div className="mt-4 ml-2">1847</div>
            </div>
            
        </div>

        <div className="flex flex-col items-center">
            <div><img src={rank1} alt="rank1-img" className="w-20 h-20" /></div>
                <div className="bg-[#3B5987] h-32 w-20 pl-5 text-white rounded-t-2xl font-bold">Eiden
                <div className="mt-6">2430</div>
            </div>
            
        </div>

        <div className="flex flex-col items-center mt-16">
            <div><img src={rank3} alt="rank1-img" className="w-20 h-20" /></div>
                <div className="bg-[#3B5987] h-16 w-20 pl-4 text-white rounded-t-2xl font-bold">Emma 
                <div className="mt-1 ml-1">1674</div>
            </div>
            
        </div>

    </div>
    {/*other scores*/}

        <div className="bg-[#3B5987] h-1/3 pb-8 w-80 rounded-3xl">

            <div className="flex flex-col">
                <div className="text-white flex flex-col">
                    <div className="flex justify-between font-bold  mt-4">
                        <img src={newrank3} alt="next-rank" className="h-8 ml-5"/>
                        <span>Sebastian</span>
                        <span className="mr-6">1124</span>
                    </div>
                    <span className="text-lg ml-6">____________________________________</span>
                </div>

                <div className="text-white flex flex-col mt-4">
                    <div className="flex justify-between font-bold">
                        <img src={newrank4} alt="next-rank" className="h-8 ml-5"/>
                        <span>Jason</span>
                        <span className="mr-6">875</span>
                    </div>
                    <span className="text-lg ml-6">____________________________________</span>
                </div>

                <div className="text-white flex flex-col  mt-4">
                    <div className="flex justify-between font-bold">
                        <img src={newrank5} alt="next-rank" className="h-8 ml-5"/>
                        <span>Natalie</span>
                        <span className="mr-6">774</span>
                    </div>
                    <span className="text-lg ml-6">____________________________________</span>
                    
                </div>

                <div className="text-white flex flex-col mt-4">
                    <div className="flex justify-between font-bold ">
                        <img src={newrank6} alt="next-rank" className="h-8 ml-5"/>
                        <span>Serenity</span>
                        <span className="mr-6 ml-6">723</span>
                    </div>
                    <span className="text-lg ml-6">____________________________________</span>
                </div>

                <div className="text-white flex flex-col">
                    <div className="flex justify-between font-bold mt-4">
                        <img src={newrank7} alt="next-rank" className="h-8 ml-5"/>
                        <span>Hannah</span>
                        <span className="mr-6">550</span>
                    </div>
                </div>

            </div>
        </div>


    </div>
    
    </>
    
  )
}

export default Score
