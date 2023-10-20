import Carousel from "./components/carousel";

const Index = () => {
  return (
    <>
      <div className=" bg-gradient-to-r from-cyan-200 to-blue-500 w-full h-screen">
        <header>
          <nav className="bg-[#002D62] p-5 ">
            <div className="container mx-auto flex  items-center h-9">
              <div className="w-1/4 bg-[#002D62] p-4 m-2 text-black">
                <p></p>
              </div>
              <div className="w-1/2 bg-[#002D62] p-4 m-2 text-black">
                <p className="text-xl text-blue-50 font-semibold">
                  CampusSphere-
                  <span className="text-blue-50">
                    {" "}
                    Where Campus Life Comes Alive
                  </span>
                </p>
              </div>
              <div className="w-1/6 bg-[#002D62] p-4 m-2 text-black justify-self-end">
                <p className="text-xl font-semibold"></p>
              </div>
              <div className="w-1/4 bg-[#002D62] p-4 m-2 text-black justify-between flex">
                <p className="text-xl font-semibold flex">
                  <button className="bg-white p-2 rounded-md ">
                    Log In/Sign Up
                  </button>
                </p>
              </div>
            </div>
          </nav>
        </header>
        <div className="main">
          <div className="w-1/3">
            <h1 className="font-light text-3xl pt-8 pl-8 text-blue-50">
              Welcome to the World{" "}
              <span className="text-base text font-black">
                where academics, fun, connections, and clubs all come together
                in one place.
              </span>
            </h1>
          </div>
          <div className="flex w-fit  ">
            <div className="w-1/2 ">
              <h1 className="text-6xl m-12 text-blue-50 font-normal">
                CampusSphere-<span className="text-3xl">
                  Where Campus Life Comes Alive</span>
              </h1>
            </div>
          </div>
          <div className="flex">
          <div className="w-fit  p-4 m-2 text-black justify-between flex hover:scale-200">
                <p className="text-xl font-semibold flex">
                  <button className="bg-blue-950 text-blue-50 p-2 rounded-md ml-10 hover:bg-blue-50 hover:text-black hover:scale-200 ">
                   Get Started
                  </button>
                </p>
              </div>
              <div className="w-fit  p-4 m-2 text-black justify-between flex hover:scale-200">
                <p className="text-xl font-semibold flex">
                  <button className="bg-blue-950 text-blue-50 p-2 rounded-md ml-10 hover:bg-blue-50 hover:text-black hover:scale-200 ">
                   Contact Us
                  </button>
                </p>
              </div>
              </div>
              
        </div>
      </div>

      <div class="bg-gradient-to-r from-cyan-200 to-blue-500 h-20 mt-11 self-center p-4">
        <center>
          <h1 class=" text-4xl">Our Special Features and Insights!</h1>
        </center>
      </div>
      <div className=" bg-[#002D62] h-96 mt-11">
        <div className="container mx-auto mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white p-4 shadow-lg rounded-lg h-96 hover:scale-110  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164840153123143733/education-logo-open-book-dictionary-textbook-or-notebook-with-graduation-hat-icon-modern-emblem-idea-concept-design-for-business-libraries-schools-universities-educational-courses-free-vector.png?ex=6544acee&is=653237ee&hm=3d0375be2b9543c9769b86a23cb9d81d725fef39392f02a9e6e09505cab36a04&=&width=589&height=589"
                alt="Item 1"
                class="w-full  object-cover rounded-lg mb-2 h-80 "
              ></img>
              <p className="text-xl font-semibold">Academics</p>
              <p className="text-gray-600"></p>
            </div>

            <div className="bg-white p-4 shadow-lg rounded-lg h-96 hover:scale-110  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164841383723536474/college-university-students-group-young-happy-people-standing-isolated-white-background_575670-66.png?ex=6544ae13&is=65323913&hm=a1066cf3b5f50fb991443e49b7e028dcbab8a9ede1405c4345488ce4f387b7bf&=&width=706&height=589 "
                alt="Item 2"
                class="w-full object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Chill Zone</p>
              <p className="text-gray-600"></p>
            </div>

            <div className="hover:scale-110 bg-white p-4 shadow-lg rounded-lg h-96  hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164838610558787627/man-looking-data-of-new-candidate.png?ex=6544ab7e&is=6532367e&hm=a33f23fb5d98cbdcd38a65e5e65b56751ad3ab15eb257641016a4d671da01c00&=&width=708&height=589"
                alt="Item 3"
                class="w-full  object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Alumini</p>
              <p className="text-gray-600"></p>
            </div>

            <div class="bg-white p-4 hover:scale-110  shadow-lg rounded-lg h-96 hover:bg-sky-200 ...">
              <img
                src="https://media.discordapp.net/attachments/1164497786964803585/1164842388280315974/College-Societies.png?ex=6544af03&is=65323a03&hm=8a5ca454314f9c216cdaaa9b558f85a34e27948bb77f299c4586cabf1d096eb0&=&width=1057&height=589"
                alt="Item 4"
                class="w-full  object-cover rounded-lg mb-2 h-80"
              ></img>
              <p className="text-xl font-semibold">Clubs</p>
              <p className="text-gray-600"></p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto mt-8 h-80 bg-gradient-to-r from-cyan-200 to-blue-500  ">
        <div className="w-full p-4 flex h-96 bg-gradient-to-r from-cyan-200 to-blue-500place-self-center  ">
          <img
            class="w-1/2 self-center h-80 mt-8 rounded-lg hover:scale-200"
            src="https://media.discordapp.net/attachments/1164497786964803585/1164624042582622249/books.png?ex=6543e3a9&is=65316ea9&hm=ad79fdfdf388131686776ca72ef98260df4799d24e2f0e09f6e2ec0b7b481177&=&width=885&height=589"
            alt="Image"
          ></img>

          <div className="w-1/2 p-4 place-self-center">
            <h1 className="text-4xl my-8">Academic Zone</h1>
            <p className="text-lg self-center ">
              Our Academic Zone is a hub of knowledge, where the community can
              contribute and access a wide range of academic resources, making
              learning more accessible and collaborative.
            </p>
          </div>
        </div>

        <div className="w-full p-4 flex h-96 bg-gradient-to-r from-cyan-200 to-blue-500  place-self-center  ">
          <p className="text-lg  w-1/2 self-center">
            <h1 className="text-4xl my-8 ">Alumini Network</h1>
            We bridge the gap between students and alumni, making it easy for
            current students to seek advice and insights from those who've
            walked the same path before.
          </p>

          <div className="w-1/2 p-4 place-self-center">
            <img
              className=" self-center h-80 mt-8 rounded-lg "
              src="https://media.discordapp.net/attachments/1164497786964803585/1164630053427097701/Untitled-design-34.png?ex=6543e942&is=65317442&hm=5f9272198e280472cb2b1785b6f4d5d1ef1033e2db7ec87694b17ca9a6f91d58&=&width=979&height=589"
              alt="Image"
            ></img>
          </div>
        </div>
        <div className="w-full p-4 flex h-96 bg-gradient-to-r from-cyan-200 to-blue-500  place-self-center  ">
          <img
            class="w-1/2 self-center h-80 mt-8 rounded-lg "
            src="https://media.discordapp.net/attachments/1164497786964803585/1164633003927011450/maxresdefault.png?ex=6543ec01&is=65317701&hm=6f7e505ddc4c09b77a4dbddac4cee1ae76a0aaf2f1dfeb5d576810b5c75b3c4c&=&width=1048&height=589"
            alt="Image"
          ></img>

          <div className="w-1/2 p-4 place-self-center">
            <h1 className="text-4xl my-8">Chill Zone</h1>
            <p className="text-lg self-center ">
              In the Chill Zone, students can form groups, engage in lively
              chats, connect with new peers, and explore various societies. It's
              a space where you can balance your academic and social life
              effortlessly.
            </p>
          </div>
        </div>

        <div className="w-full p-4 flex h-96 bg-gradient-to-r from-cyan-200 to-blue-500  place-self-center  ">
          <p className="text-lg  w-1/2 self-center">
            <h1 className="text-4xl my-8 ">Clubs/Societies</h1>
            We bridge the gap between students and alumni, making it easy for
            current students to seek advice and insights from those who've
            walked the same path before.
          </p>

          <div className="w-1/2 p-4 place-self-center">
            <img
              className=" self-center h-80 mt-8 rounded-lg "
              src="https://media.discordapp.net/attachments/1164497786964803585/1164635105462071356/8471bb4825047bbe437682e85769ad08.png?ex=6543edf7&is=653178f7&hm=7f34748644ce7e62449299ac20e06132e484b77f08a327af89919c94979098d0&=&width=1048&height=589"
              alt="Image"
            ></img>
          </div>
        </div>
        <Carousel />
        <div class="bg-[#002D62] h-16 self-center p-4">
          <center>
            <h1 class="  text-blue-50 text-4xl">Welcome To Our Team!</h1>
          </center>
        </div>
        <div class=" bg-[#002D62]  container mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-36 h-96">
          <div class="team-card dark:md:hover:bg-sky-200 hover:scale-110  bg-white p-4 rounded-lg relative mt-4 h-80 transition duration-300 delay-150 hover:delay-100">
            <img
              src="team-member-1.jpg"
              alt="Team Member 1"
              class="w-full h-40 object-cover rounded-lg mb-2"
            ></img>
            <p class="text-lg font-semibold">Team Member 1</p>
            <p class="text-gray-600">Role 1</p>
          </div>

          <div class="team-card dark:md:hover:bg-sky-200 ... hover:scale-110  bg-white p-4 rounded-lg relative mt-4 h-80 transition duration-300 delay-150 hover:delay-100">
            <img
              src="team-member-2.jpg"
              alt="Team Member 2"
              class="w-full h-40 object-cover rounded-lg mb-2"
            ></img>
            <p class="text-lg font-semibold">Team Member 2</p>
            <p class="text-gray-600">Role 2</p>
          </div>

          <div class="dark:md:hover:bg-sky-200 ... hover:scale-110  z-40 transition duration-100 delay-150 hover:delay-300 team-card bg-white p-4 rounded-lg relative mt-4 h-80">
            <img
              src="team-member-3.jpg"
              alt="Team Member 3"
              class="w-full h-40 object-cover rounded-lg mb-2"
            ></img>
            <p class="text-lg font-semibold">Team Member 3</p>
            <p class="text-gray-600">Role 3</p>
          </div>
        </div>
        <div class="bg-gradient-to-r from-cyan-200 to-blue-500  mx-auto bg-white p-8 rounded shadow-md ">
          <h1 class="text-2xl font-semibold mb-4">Contact Us</h1>
          <form>
            <div class="mb-4">
              <label
                for="name"
                class="block text-black text-l font-bold mb-2 border-gray-950"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                class="border-4 border-black w-full px-3 py-2  rounded-lg"
                placeholder="Your Name"
                required
              ></input>
            </div>
            <div class="mb-4">
              <label for="email" class="block text-black text-l font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                class="border-4 border-black w-full px-3 py-2 rounded-lg"
                placeholder="you@example.com"
                required
              ></input>
            </div>
            <div class="mb-4 ">
              <label
                for="message"
                class="block text-black text-l  font-bold mb-2 "
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                class="border-4 border-black w-full px-3 py-2  rounded-lg"
                rows="5"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              class="bg-[#002D62] hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Index;
