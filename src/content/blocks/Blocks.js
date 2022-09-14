import './blocks.css';

export default function Blocks () {
  
  return (
    <div style={{backgroundAttachment: 'fixed', overflowX:'hidden'}} className='cardComponent_blocks'>
      <div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
          {/* <!--Card 1--> */}
          <div class="rounded overflow-hidden shadow-lg rotate-6">
            <img class="w-full" src="logoYellow.png" alt="Mountain"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Guiding artists</div>
              <p class="text-gray-700 text-base">
              <p>
                                In the past comic book, artists have often been overlooked in the world of art or they haven’t 
                                been given the due credit that they deserve. Artists have struggled with obtaining rights and 
                                receiving royalty rates.
                            </p> 
                            <p>Comics Friends wants to help artists by giving them back the visibility 
                                and credit they deserve. 
                                At comics Friends, we guide artists whether it be through the creation 
                                of their own NFT collection or by exposing their work on a large virtual stage.
                            </p>
                            <p>
                                We work very closely with artists from the beginning to the end. And throughout their creation, to ensure
                                that the artists’ vision and desired outcome are respected.
                            </p>
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
            </div>
          </div>
          {/* <!--Card 2--> */}
          <div class="rounded overflow-hidden shadow-lg rotate-[-6deg]">
            <img class="w-full" src="/img_logo_comicsFriends/comicsFriendspic3.png" alt="River"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Creating the first-ever virtual comic museum</div>
              <p class="text-gray-700 text-base">
              <p>
                                Comic book art is often seen as less important than other arts in the eyes of many, which is
                                why Comics Friends wants to spotlight all these incredible artists and their work. Although
                                there are already several comic book museums around the world and comic book conferences,
                                there is no place where all comic book and artwork lovers and artists can come together
                                online and display their work.
                            </p>
                            <p>
                                To put together the first-ever virtual comic book museum for
                                collectors and artists is to create a community where collectors can display their work and
                                share it with other like-minded individuals. This is a space where collectors can finally bring
                                forward the vast diversity of comic book art and share it with the rest of the world.
                            </p>
                            <p>
                                The museum will display different artists based on a large selection of themes that will change
                                throughout the course of the year. These themes will ensure that not only renown artists are
                                put forth but also allowing for younger emerging artists to receive the recognition they
                                deserve.
                            </p>
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#summer</span>
            </div>
          </div>

          {/* <!--Card 3--> */}
          <div class="rounded overflow-hidden shadow-lg rotate-6">
            <img class="w-full" src="/img_logo_comicsFriends/comicsFriendspic2.png" alt="Forest"/>
            <div class="px-6 py-4">
              <div class="font-bold text-xl mb-2">Creating a Web3 collectors forum</div>
              <p class="text-gray-700 text-base">
                <p>
                    The Comics Friends forum will act as a platform where holders of the CF NFTs will be able
                    to discuss and share ideas on particular collections, and artists, as well as all Comics Friends
                    related things.
                </p>
                <p>
                    The forum will only be accessible to holders of the CF NFTs. The key purpose
                    of the forum is to act as a space where individuals can challenge the way one thinks and find
                    new perspectives or discover new artists that they may not have heard of.
                </p>
                <p>
                    It should act as a positive and educational space where people can exchange freely without judgement and learn
                    from one another. A fun place to make new friends.
                </p>
                </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
            </div>
          </div>
        </div>
    </div>
  )
}
