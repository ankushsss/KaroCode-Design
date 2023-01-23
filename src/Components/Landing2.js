import Circular from "./Circular";

export default function Landing2() {
    return (
      <div className="relative overflow-hidden isolate bg-white">
        <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
          <div className="relative mx-auto w-100 max-w-7xl px-4 sm:static sm:px-6 lg:px-8 ">
            <div className="sm:max-w-lg inline-block w-50">
              <h1 className="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                START JOURNEY WITH <span style={{color:"#ff8109"}}>KARO CODE</span>
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                This year, our new summer collection will shelter you from the harsh elements of a world that doesn't care
                if you live or die.
              </p>
            </div>
            <div className="inline-block w-45 absolute top-0">
              <div className="mt-10">
                {/* Decorative image grid 
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <img
                            src="https://allvectorlogo.com/img/2016/04/js-logo.png"

                            alt=""
                            className="h-full w-full object-cover object-center"
                            style={{width:"300px", height:"200px"}}
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://images.credly.com/images/51aeb74b-ec87-4069-93fc-0ea449c8d77f/node.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                            style={{width:"400px", height:"200px"}}

                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://pbs.twimg.com/profile_images/1542865641610260480/wrpvCVGq_400x400.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                          src="https://www.pngitem.com/pimgs/m/610-6105615_python-icon-button-ui-app-pack-blackvariant-python.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                            src="https://allvectorlogo.com/img/2016/04/js-logo.png"
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-64 w-44 overflow-hidden rounded-lg">
                          <img
                          src="https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png"
                           
                            alt=""
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>*/}
                <div>
                    <Circular/>
                </div>
  
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700"
                >
                  Shop Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }