import MoonImage from '../assets/destination/image-moon.png'
import CrewImage from '../assets/crew/image-douglas-hurley.png'

export const Data = {
    "destinations" :[
        {
          "name": "Moon",
          "images": {
            "png": MoonImage,
          },
          "description": "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
          "distance": "384,400 km",
          "travel": "3 days"
        },
        {
          "name": "Mars",
          "images": {
            "png": MoonImage,
            "webp": "./assets/destination/image-mars.webp"
          },
          "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          "distance": "225 mil. km",
          "travel": "9 months"
        },
        {
          "name": "Europa",
          "images": {
            "png": MoonImage
          },
          "description": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          "distance": "628 mil. km",
          "travel": "3 years"
        },
        {
          "name": "Titan",
          "images": {
            "png": MoonImage
          },
          "description": "Vitae tempus quam pellentesque nec. Dignissim convallis aenean et tortor at risus viverra adipiscing at. Augue mauris augue neque gravida in. Lacus luctus accumsan tortor posuere ac ut consequat semper viverra. Sed vulputate mi sit amet mauris.",
          "distance": "1.6 bil. km",
          "travel": "7 years"
        }
      ],
      "crew" :[
        {
          "name": "Douglas Hurley",
          "images": {
            "png": CrewImage
          },
          "role": "Commander",
          "bio": "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."
        },
        {
          "name": "Eren Yeager",
          "images": {
            "png": CrewImage
          },
          "role": "Mission Specialist",
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "name": "Mikasa Ackerman",
          "images": {
            "png": CrewImage
          },
          "role": "Pilot",
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        },
        {
          "name": "Levi Ackerman",
          "images": {
            "png": CrewImage
          },
          "role": "Flight Engineer",
          "bio": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        }
      ],
      "technology" :[
        {
          "name": "Launch vehicle",
          "images": {
            "portrait": "./assets/technology/image-launch-vehicle-portrait.jpg",
            "landscape": "./assets/technology/image-launch-vehicle-landscape.jpg"
          },
          "description": "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"
        },
        {
          "name": "Spaceport",
          "images": {
            "portrait": "./assets/technology/image-spaceport-portrait.jpg",
            "landscape": "./assets/technology/image-spaceport-landscape.jpg"
          },
          "description": "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."
        },
        {
          "name": "Space capsule",
          "images": {
            "portrait": "./assets/technology/image-space-capsule-portrait.jpg",
            "landscape": "./assets/technology/image-space-capsule-landscape.jpg"
          },
          "description": "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."
        }
      ]}
