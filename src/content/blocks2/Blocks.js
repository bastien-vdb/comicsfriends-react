import './blocks.css';

export default function Blocks () {
  
  return (
    <div>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* <!--Card 1--> */}
          <div className="rounded overflow-hidden shadow-lg rotate-3" style={{backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
            <img className="w-full" src="logoYellow.png" alt="Mountain"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Guiding artists</div>
              <div className="text-gray-700 text-base">
              <p>
                                In the past comic book, artists have often been overlooked in the world of art or they haven’t 
                                been given the due credit that they deserve. Artists have struggled with obtaining rights and 
                                receiving royalty rates...
                            </p> 
              </div>
            </div>
          </div>
          {/* <!--Card 2--> */}
          <div className="rounded overflow-hidden shadow-lg rotate-[-3deg]" style={{backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
            <img className="w-full" src="/img_logo_comicsFriends/comicsFriendspic3.png" alt="River"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Creating the first-ever virtual comic museum</div>
              <div className="text-gray-700 text-base">
                            <p>
                                Comic book art is often seen as less important than other arts in the eyes of many, which is
                                why Comics Friends wants to spotlight all these incredible artists and their work. Although
                                there are already several comic book museums around the world and comic book conferences,
                                there is no place where all comic book and artwork lovers and artists can come together
                                online and display their work...
                            </p>
              </div>
            </div>
          </div>

          {/* <!--Card 3--> */}
          <div className="rounded overflow-hidden shadow-lg rotate-3" style={{backgroundColor:'rgba(255, 255, 255, 0.8)'}}>
            <img className="w-full" src="/img_logo_comicsFriends/comicsFriendspic2.png" alt="Forest"/>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Creating a Web3 collectors forum</div>
              <div className="text-gray-700 text-base">
                <p>
                    The Comics Friends forum will act as a platform where holders of the CF NFTs will be able
                    to discuss and share ideas on particular collections, and artists, as well as all Comics Friends
                    related things...
                </p>
              </div>
            </div>
          </div>

    </div>
  </div>
  )
}
