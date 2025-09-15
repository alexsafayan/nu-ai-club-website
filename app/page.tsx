'use client'
import { motion } from 'motion/react'
import { XIcon, ChevronUp, ArrowUpRight } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { MagneticButton } from '@/components/ui/magnetic-button'
import {
    MorphingDialog,
    MorphingDialogTrigger,
    MorphingDialogContent,
    MorphingDialogClose,
    MorphingDialogContainer,
} from '@/components/ui/morphing-dialog'
import Link from 'next/link'
import { AnimatedBackground } from '@/components/ui/animated-background'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import {
    EVENTS,
    PROJECTS,
    EXECUTIVE_TEAM,
    GENERAL_MEMBERS,
    FAQ_ITEMS,
    EMAIL,
    SOCIAL_LINKS,
} from './data'
import {
    Accordion,
    AccordionItem,
    AccordionTrigger,
    AccordionContent,
} from '@/components/motion-primitives/accordion'

const VARIANTS_CONTAINER = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
}

const VARIANTS_SECTION = {
    hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
    duration: 0.3,
}

type ProjectVideoProps = {
    src: string
}

function ProjectVideo({ src }: ProjectVideoProps) {
    return (
        <MorphingDialog
            transition={{
                type: 'spring',
                bounce: 0,
                duration: 0.3,
            }}
        >
            <MorphingDialogTrigger>
                <video
                    src={src}
                    autoPlay
                    loop
                    muted
                    className="aspect-video w-full cursor-zoom-in rounded-xl"
                />
            </MorphingDialogTrigger>
            <MorphingDialogContainer>
                <MorphingDialogContent className="relative aspect-video rounded-2xl bg-zinc-50 p-1 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950 dark:ring-zinc-800/50">
                    <video
                        src={src}
                        autoPlay
                        loop
                        muted
                        className="aspect-video h-[50vh] w-full rounded-xl md:h-[70vh]"
                    />
                </MorphingDialogContent>
                <MorphingDialogClose
                    className="fixed top-6 right-6 h-fit w-fit rounded-full bg-white p-1"
                    variants={{
                        initial: { opacity: 0 },
                        animate: {
                            opacity: 1,
                            transition: { delay: 0.3, duration: 0.1 },
                        },
                        exit: { opacity: 0, transition: { duration: 0 } },
                    }}
                >
                    <XIcon className="h-5 w-5 text-zinc-500" />
                </MorphingDialogClose>
            </MorphingDialogContainer>
        </MorphingDialog>
    )
}

function MagneticSocialLink({
    children,
    link,
    ...props
}: {
    children: React.ReactNode
    link: string
} & React.ComponentProps<typeof MagneticButton>) {
    return (
        <MagneticButton {...props}>
            <a
                href={link}
                className="group relative inline-flex shrink-0 items-center gap-[1px]"
            >
                {children}
                <ArrowUpRight className="h-3 w-3" />
            </a>
        </MagneticButton>
    )
}

export default function Home() {
    return (
        <motion.main
            className="space-y-24"
            variants={VARIANTS_CONTAINER}
            initial="hidden"
            animate="visible"
        >
            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                className="relative"
            >
                <Spotlight
                    className="absolute -top-40 left-0 md:-top-20 md:left-60"
                />
                <div className="relative rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8 shadow-xl ring-1 ring-blue-200/50 dark:from-blue-950/30 dark:to-indigo-950/30 dark:ring-blue-800/30">
                    <div className="text-center">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl"
                        >
                            Applications are now open for our flagship opportunity, the{' '}
                            <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                                AI Innovation Lab Fellowship
                            </span>
                        </motion.h2>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300"
                        >
                            A selective one-year program providing unparalleled hands-on experience in cutting-edge AI research and industry partnerships.
                            Projects are open to both technical and non-technical applicants, spanning AI/ML development to political and economic applications.
                            Fellows gain direct project experience highly valued by employers and academia, collaborate with industry leaders
                            and professors, and receive resume book inclusion.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="space-y-4"
                        >
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLScTtuPiGqG7Z1Uc5o1mZVqEX7Zq_x-tTljKIT0SDTE-MAEKAw/viewform?usp=sharing&ouid=113293324627676648343"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center rounded-lg bg-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg hover:bg-purple-700"
                            >
                                Apply Now
                            </a>

                            <p className="text-sm font-medium text-red-600 dark:text-red-400">
                                <em>Fall cohort applications due September 25th</em>
                            </p>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">About</h3>
                <div className="flex-1">
                    <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                        As the premier AI organization at Northwestern, Northwestern AI empowers students to explore, build, and lead in artificial intelligence. We welcome undergraduates from all backgrounds—technical or non-technical—who are curious about AI and ready to engage. The Northwestern AI club is a barrier-free organization. This means that all undergraduates are welcome to join our general membership.
                    </p>
                    <div className="flex">
                        <a
                            href="https://docs.google.com/forms/d/1BadFZ2vvcP_v8HAyr4KDqdJkgrFETc6Hu2fJQgOSiEc/edit"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-purple-700"
                        >
                            Join Now
                        </a>
                    </div>
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">Events</h3>
                <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                    We host events during the school year that connect students with AI in the real world:
                </p>
                <ul className="mb-5 list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                    <li>Guest Speakers</li>
                    <li>Discussions</li>
                    <li>Workshops</li>
                    <li>Hackathons</li>
                </ul>
                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {EVENTS.map((event) => (
                            <CarouselItem key={event.id} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                                <div className="h-full">
                                    <div
                                        className={`relative flex h-full flex-col rounded-2xl bg-zinc-50/40 p-6 ring-1 ring-zinc-200/50 ring-inset dark:bg-zinc-950/40 dark:ring-zinc-800/50 ${event.id === 'event-coming-soon' ? 'opacity-50' : ''
                                            }`}
                                    >
                                        <h4 className="font-medium text-black dark:text-white">{event.title}</h4>
                                        <p className="text-zinc-600 dark:text-zinc-400">{event.description}</p>
                                        {event.date && (
                                            <p className="mt-auto pt-4 text-sm text-zinc-500">{event.date}</p>
                                        )}
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <div className="flex justify-end gap-2 py-2">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </Carousel>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">Collaboration Opportunities</h3>
                <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                    The Northwestern AI Club is a vast community of exceptional students. Our student-led teams collaborate on applied AI/ML opportunities with faculty, startups, and companies.
                </p>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                    Faculty or industry? We'd love to collaborate. Our teams work independently or with your guidance, depending on scope.
                </p>
                <div className="flex">
                    <MagneticButton asChild>
                        <a href="mailto:northwesternaiclub@gmail.com?subject=Collaboration Proposal">
                            Submit a Proposal
                        </a>
                    </MagneticButton>
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                id="get-involved"
            >
                <h3 className="mb-5 text-lg font-medium">Get Involved</h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="space-y-4">
                        <h4 className="font-medium text-black dark:text-white">For Students</h4>
                        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                            <li>Open to all Northwestern undergraduates</li>
                            <li>No prior AI experience required</li>
                            <li>Applications open each quarter</li>
                        </ul>
                        <div className="flex">
                            <MagneticButton asChild>
                                <a
                                    href="https://docs.google.com/forms/d/1BadFZ2vvcP_v8HAyr4KDqdJkgrFETc6Hu2fJQgOSiEc/edit"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Join Now
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-medium text-black dark:text-white">For Partners</h4>
                        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                            <li><strong>Speakers</strong> on AI topics</li>
                            <li><strong>Sponsors</strong> for events and competitions</li>
                            <li><strong>Collaborators</strong> for research or product development projects</li>
                        </ul>
                        <div className="flex">
                            <MagneticButton asChild>
                                <a href="mailto:northwesternaiclub@gmail.com?subject=Partnership Inquiry">
                                    Partner With Us
                                </a>
                            </MagneticButton>
                        </div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">Roster</h3>
                <div className="space-y-8">
                    <h4 className="mb-4 font-medium text-black dark:text-white">Executive Team</h4>
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                        {EXECUTIVE_TEAM.map((member) => (
                            <div
                                key={member.id}
                                className="rounded-xl bg-zinc-50 p-4 text-center dark:bg-zinc-900"
                            >
                                <h4 className="font-medium text-black dark:text-white">{member.name}</h4>
                                <p className="text-sm text-zinc-600 dark:text-zinc-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                    <h4 className="mb-4 font-medium text-black dark:text-white">General Members</h4>
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Join our growing community in our GroupMe of over 175 members
                    </p>
                </div>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">FAQ</h3>
                <Accordion
                    className="flex w-full flex-col divide-y divide-zinc-200 dark:divide-zinc-700"
                    transition={{ duration: 0.2, ease: 'easeInOut' }}
                >
                    {FAQ_ITEMS.map((item) => (
                        <AccordionItem
                            key={item.id}
                            value={item.id}
                            className="py-2"
                        >
                            <AccordionTrigger className="w-full text-left text-zinc-950 dark:text-zinc-50">
                                <div className="flex items-center justify-between">
                                    <div>{item.question}</div>
                                    <ChevronUp className="h-4 w-4 text-zinc-950 transition-transform duration-200 group-data-expanded:-rotate-180 dark:text-zinc-50" />
                                </div>
                            </AccordionTrigger>
                            <AccordionContent>
                                <p className="text-zinc-500 dark:text-zinc-400">
                                    {item.answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">Alumni Network</h3>
                <p className="text-zinc-600 dark:text-zinc-400">
                    Our alumni network is vast and our members go on to become visionaries in the world of AI.
                </p>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
            >
                <h3 className="mb-5 text-lg font-medium">Contact</h3>
                <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                    Feel free to contact us at{' '}
                    <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
                        {EMAIL}
                    </a>
                </p>
                <div className="flex items-center justify-start space-x-3">
                    {SOCIAL_LINKS.map((link) => (
                        <MagneticSocialLink key={link.label} link={link.link} disabled>
                            {link.label}
                        </MagneticSocialLink>
                    ))}
                </div>
            </motion.section>
        </motion.main>
    )
}
