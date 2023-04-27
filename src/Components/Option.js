import { BoltIcon, GiftIcon, QueueListIcon, BookOpenIcon } from '@heroicons/react/24/outline'

const features = [
  {
    name: 'Comprehensive Curriculum:',
    description:
      'Our courses are carefully crafted to provide you with a comprehensive understanding of the subject matter. We cover all the essential concepts, theories, and tools necessary for success in the industry.',
    icon: QueueListIcon,
  },
  {
    name: 'Hands-On Learning:',
    description:
      'We believe that hands-on learning is the most effective way to learn IT skills. Our courses are designed to be interactive and engaging, with plenty of opportunities for you to practice your new skills and apply them in real-world scenarios.',
    icon: BookOpenIcon,
  },
  {
    name: 'Experienced Instructors: ',
    description:
      'Our instructors are experienced IT professionals with a wealth of knowledge and expertise in their respective fields. They are passionate about sharing their knowledge and helping students achieve their goals.',
    icon: BoltIcon,
  },
  {
    name: 'Career Support:',
    description:
      ' Our courses are designed to help you launch or advance your career in IT. We provide career support services, including resume and cover letter reviews, job search guidance, and networking opportunities, to help you achieve your career goals. ',
    icon: GiftIcon,
  },
]

export default function Option() {
  return (
    <div className="bg-white py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="sm:text-center">
          <h2 className="text-lg font-semibold leading-8 text-orange-600">Courses</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our courses are designed to</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          provide you with the skills and knowledge you need to succeed in the fast-paced and ever-evolving field of IT. Here's what you can expect from our courses:
          </p>
        </div>

        <div className="mt-20 max-w-lg sm:mx-auto md:max-w-none">
          <div className="grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-12 md:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative flex flex-col gap-6 sm:flex-row md:flex-col lg:flex-row">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500 text-white sm:shrink-0">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
                <div className="sm:min-w-0 sm:flex-1">
                  <p className="text-lg font-semibold leading-8 text-gray-900">{feature.name}</p>
                  <p className="mt-2 text-base leading-7 text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}