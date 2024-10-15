'use client'

import {
  AcademicCapIcon,
  CheckCircleIcon,
  HandRaisedIcon,
  RocketLaunchIcon,
  SparklesIcon,
  SunIcon,
  UserGroupIcon,
} from '@heroicons/react/20/solid'


const values = [
  {
    name: 'Pursue Innovation.',
    description: 'We believe in breaking boundaries and constantly exploring new, groundbreaking ideas to stay ahead of the curve.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Take Ownership.',
    description: 'We take full responsibility for our work, ensuring that every project is handled with care and attention to detail.',
    icon: HandRaisedIcon,
  },
  {
    name: 'Foster Collaboration.',
    description: 'Our strength lies in our teamwork. We work together to achieve amazing results for our clients and ourselves.',
    icon: UserGroupIcon,
  },
  {
    name: 'Commit to Growth.',
    description: 'We are lifelong learners, always eager to expand our knowledge and grow in the fast-paced tech world.',
    icon: AcademicCapIcon,
  },
  {
    name: 'Share the Journey.',
    description: 'We openly share our experiences, insights, and knowledge to help each other grow and thrive in this dynamic industry.',
    icon: SparklesIcon,
  },
  {
    name: 'Love the Hustle.',
    description: 'We enjoy the process of turning ambitious ideas into reality. Hard work and dedication are part of our DNA.',
    icon: SunIcon,
  },
]
// const team = [
//   {
//     name: 'Omar Salah',
//     role: 'Founder / CEO',
//     imageUrl:
//       'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
//     location: 'Cairo, Egypt',
//   },
  // More people...
// ]
const benefits = [
  'Competitive salaries',
  'Flexible work hours',
  'Inspiring work environment',
  'Innovative projects',
  'Team-building activities',
  'Opportunities for growth and learning',
]

export default function about() {

  return (
    <div className="bg-gray-900">
      <main className="relative isolate">
        {/* Background */}
        <div
          className="absolute inset-x-0 top-4 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div
            className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
          />
        </div>

        {/* Header section */}
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-40">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">We are Quadra</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At Quadra, we live and breathe innovation. We are a passionate team of tech enthusiasts, thriving to bring new, bold ideas to life. We embrace the challenge of transforming creativity into groundbreaking solutions.
            </p>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 lg:max-w-none lg:grid-cols-2">
              <div>
                <p>
                  At Quadra, we aren't just developers we're creators. We take pride in designing and building innovative software that stands out. Every project we work on is an opportunity to push boundaries and redefine what’s possible.
                </p>
                <p className="mt-8">
                  Our team is full of hardworking, passionate individuals who love what they do. We're always exploring new technologies and concepts, making sure that every idea turns into a powerful reality.
                </p>
              </div>
              <div>
                <p>
                  We are the upcoming tech bros who aren't afraid of hard work. Every line of code, every design, every solution we deliver is crafted with dedication. We enjoy the process, and nothing excites us more than seeing our ideas come to life.
                </p>
                <p className="mt-8">
                  Our journey is just beginning, and with every project, we’re growing stronger and more innovative. We love collaborating with clients who share our enthusiasm for creativity and problem-solving.
                </p>
              </div>
            </div>
{/* 
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div key={statIdx} className="flex flex-col-reverse gap-y-3 border-l border-white/20 pl-6">
                  <dt className="text-base leading-7 text-gray-300">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-white">{stat.value}</dd>
                </div>
              ))}
            </dl> */}

          </div>
        </div>

        {/* Image section */}
        <div className="mt-32 sm:mt-40 xl:mx-auto xl:max-w-7xl xl:px-8">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            className="aspect-[9/4] w-full object-cover xl:rounded-3xl"
          />
        </div>

        {/* Values section */}
        <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our values</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              At Quadra, our core values define who we are and how we work. We are dedicated to pushing the limits of innovation and making a lasting impact.
            </p>
          </div>
          <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-300 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-16">
            {values.map((value) => (
              <div key={value.name} className="relative pl-9">
                <dt className="inline font-semibold text-white">
                  <value.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-500" aria-hidden="true" />
                  {value.name}
                </dt>{' '}
                <dd className="inline">{value.description}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Team section */}
        {/* <div className="mx-auto mt-32 max-w-7xl px-6 sm:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Our team</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              We are a team of passionate, driven tech enthusiasts who love working on cutting-edge projects. Together, we create incredible solutions and have fun doing it.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 xl:grid-cols-4"
          >
            {team.map((person) => (
              <li key={person.name}>
                <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.imageUrl} alt="" />
                <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-white">{person.name}</h3>
                <p className="text-base leading-7 text-gray-300">{person.role}</p>
                <p className="text-sm leading-6 text-gray-500">{person.location}</p>
              </li>
            ))}
          </ul>
        </div> */}

        {/* CTA section */}
        <div className="relative isolate -z-10 mt-32 sm:mt-40">
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
              <img
                className="h-96 w-full flex-none rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto lg:max-w-sm"
                src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2710&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <div className="w-full flex-auto">
                <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Join our team</h2>
                <p className="mt-6 text-lg leading-8 text-gray-300">
                  Be part of an innovative, passionate team that thrives on creativity and the drive to turn big ideas into reality.
                </p>
                <ul
                  role="list"
                  className="mt-10 grid grid-cols-1 gap-x-8 gap-y-3 text-base leading-7 text-white sm:grid-cols-2"
                >
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex gap-x-3">
                      <CheckCircleIcon className="h-7 w-5 flex-none" aria-hidden="true" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                {/* <div className="mt-10 flex">
                  <a href="#" className="text-sm font-semibold leading-6 text-indigo-400">
                    See our job postings <span aria-hidden="true">&rarr;</span>
                  </a>
                </div> */}
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
            aria-hidden="true"
          >
            <div
              className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
              style={{
                clipPath:
                  'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
              }}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
