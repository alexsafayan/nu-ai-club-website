'use client'
import { motion } from 'motion/react'
import { XIcon, ChevronUp } from 'lucide-react'
import { Spotlight } from '@/components/ui/spotlight'
import { Magnetic } from '@/components/ui/magnetic'
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
}: {
    children: React.ReactNode
    link: string
}) {
    return (
        <Magnetic springOptions={{ bounce: 0 }} intensity={0.3}>
            <a
                href={link}
                className="group relative inline-flex shrink-0 items-center gap-[1px] rounded-full bg-zinc-100 px-2.5 py-1 text-sm text-black transition-colors duration-200 hover:bg-zinc-950 hover:text-zinc-50 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700"
            >
                {children}
                <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3"
                >
                    <path
                        d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                    ></path>
                </svg>
            </a>
        </Magnetic>
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
            >
                <h3 className="mb-5 text-lg font-medium">About</h3>
                <div className="flex-1">
                    <p className="text-zinc-600 dark:text-zinc-400">
                        Northwestern AI empowers students to explore, build, and lead in artificial intelligence. We foster innovation through hands-on projects and events. We welcome undergraduates from all backgrounds—technical or non-technical—who are curious about AI and ready to engage.
                    </p>
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
                <h3 className="mb-5 text-lg font-medium">Projects</h3>
                <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                    Our student-led teams collaborate on applied AI/ML projects with faculty, startups, and companies.
                </p>
                <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                    Projects starting in Fall 2025.
                </p>
                <p className="mb-4 text-zinc-600 dark:text-zinc-400">
                    Faculty or industry? We'd love to collaborate. Our teams work independently or with your guidance, depending on scope.
                </p>
                <Magnetic>
                    <Link
                        href={`mailto:${EMAIL}?subject=Project Proposal`}
                        className="rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                    >
                        Submit a Proposal
                    </Link>
                </Magnetic>
            </motion.section>

            <motion.section
                variants={VARIANTS_SECTION}
                transition={TRANSITION_SECTION}
                id="join"
            >
                <h3 className="mb-5 text-lg font-medium">Get Involved</h3>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                    <div className="space-y-4">
                        <h4 className="font-medium text-black dark:text-white">For Students</h4>
                        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                            <li>Open to all Northwestern undergraduates</li>
                            <li>No prior AI experience required</li>
                            <li>Info sessions each quarter</li>
                            <li>Apply or drop in at meetings</li>
                        </ul>
                    </div>
                    <div className="space-y-4">
                        <h4 className="font-medium text-black dark:text-white">For Partners</h4>
                        <ul className="list-disc pl-5 text-zinc-600 dark:text-zinc-400">
                            <li><strong>Speakers</strong> on AI topics</li>
                            <li><strong>Sponsors</strong> for events and competitions</li>
                            <li><strong>Collaborators</strong> for research or product development projects</li>
                        </ul>
                        <Magnetic>
                            <Link
                                href={`mailto:${EMAIL}?subject=Partnership Inquiry`}
                                className="inline-block rounded-full bg-black px-4 py-2 text-sm text-white transition-colors hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
                            >
                                Partner With Us
                            </Link>
                        </Magnetic>
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
                        {GENERAL_MEMBERS.map((member, index) => (
                            <span key={member.id}>
                                {member.name}
                                {index < GENERAL_MEMBERS.length - 1 ? ', ' : ''}
                            </span>
                        ))}
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
                <h3 className="mb-5 text-lg font-medium">Contact</h3>
                <p className="mb-5 text-zinc-600 dark:text-zinc-400">
                    Feel free to contact us at{' '}
                    <a className="underline dark:text-zinc-300" href={`mailto:${EMAIL}`}>
                        {EMAIL}
                    </a>
                </p>
                <div className="flex items-center justify-start space-x-3">
                    {SOCIAL_LINKS.map((link) => (
                        <MagneticSocialLink key={link.label} link={link.link}>
                            {link.label}
                        </MagneticSocialLink>
                    ))}
                </div>
            </motion.section>
        </motion.main>
    )
}
